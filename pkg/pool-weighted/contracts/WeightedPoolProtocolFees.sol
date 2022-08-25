// SPDX-License-Identifier: GPL-3.0-or-later
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

pragma solidity ^0.7.0;
pragma experimental ABIEncoderV2;

import "@balancer-labs/v2-pool-utils/contracts/ProtocolFeeCache.sol";
import "@balancer-labs/v2-pool-utils/contracts/InvariantGrowthProtocolSwapFees.sol";

import "./BaseWeightedPool.sol";

abstract contract WeightedPoolProtocolFees is BaseWeightedPool, ProtocolFeeCache {
    using FixedPoint for uint256;

    // This Pool pays protocol fees by measuring the growth of the invariant between joins and exits. Since weights are
    // immutable, the invariant only changes due to accumulated swap fees, which saves gas by freeing the Pool
    // from performing any computation or accounting associated with protocol fees during swaps.
    // This mechanism requires keeping track of the invariant after the last join or exit.
    uint256 private _lastPostJoinExitInvariant;

    /**
     * @dev Returns the value of the invariant after the last join or exit operation.
     */
    function getLastInvariant() public view returns (uint256) {
        return _lastPostJoinExitInvariant;
    }

    function _getSwapProtocolFees(
        uint256[] memory preBalances,
        uint256[] memory normalizedWeights,
        uint256 preJoinExitSupply
    ) internal view returns (uint256) {
        uint256 protocolSwapFeePercentage = getProtocolFeePercentageCache(ProtocolFeeType.SWAP);

        // We return immediately if the fee percentage is zero to avoid unnecessary computation.
        if (protocolSwapFeePercentage == 0) return 0;

        // Before joins and exits, we measure the growth of the invariant compared to the invariant after the last join
        // or exit, which will have been caused by swap fees, and use it to mint BPT as protocol fees. This dilutes all
        // LPs, which means that new LPs will join the pool debt-free, and exiting LPs will pay any amounts due
        // before leaving.

        uint256 preJoinExitInvariant = WeightedMath._calculateInvariant(normalizedWeights, preBalances);

        // We pass `preJoinExitSupply` as the total supply twice as we're measuring over a period in which the total
        // supply has not changed.
        return
            InvariantGrowthProtocolSwapFees.calcDueProtocolFees(
                preJoinExitInvariant.divDown(_lastPostJoinExitInvariant),
                preJoinExitSupply,
                preJoinExitSupply,
                protocolSwapFeePercentage
            );
    }

    function _getJoinExitProtocolFees(
        uint256[] memory preBalances,
        uint256[] memory balanceDeltas,
        uint256[] memory normalizedWeights,
        uint256 preJoinExitSupply,
        uint256 postJoinExitSupply
    ) internal view returns (uint256, uint256) {
        bool isJoin = postJoinExitSupply >= preJoinExitSupply;

        // Compute the post balances by adding or removing the deltas.
        for (uint256 i = 0; i < preBalances.length; ++i) {
            preBalances[i] = isJoin
                ? SafeMath.add(preBalances[i], balanceDeltas[i])
                : SafeMath.sub(preBalances[i], balanceDeltas[i]);
        }

        // preBalances have now been mutated to reflect the postJoinExit balances.
        uint256 postJoinExitInvariant = WeightedMath._calculateInvariant(normalizedWeights, preBalances);
        uint256 protocolSwapFeePercentage = getProtocolFeePercentageCache(ProtocolFeeType.SWAP);

        // We return immediately if the fee percentage is zero to avoid unnecessary computation.
        if (protocolSwapFeePercentage == 0) return (0, postJoinExitInvariant);

        uint256 preJoinExitInvariant = WeightedMath._calculateInvariant(normalizedWeights, preBalances);
        uint256 protocolFeeAmount = InvariantGrowthProtocolSwapFees.calcDueProtocolFees(
            postJoinExitInvariant.divDown(preJoinExitInvariant),
            preJoinExitSupply,
            postJoinExitSupply,
            protocolSwapFeePercentage
        );

        return (protocolFeeAmount, postJoinExitInvariant);
    }

    function _updatePostJoinExit(uint256 postJoinExitInvariant) internal virtual override {
        // After all joins and exits we store the post join/exit invariant in order to compute growth due to swap fees
        // in the next one.
        _lastPostJoinExitInvariant = postJoinExitInvariant;
    }
}