// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;
pragma experimental ABIEncoderV2;
import "@balancer-labs/v2-interfaces/contracts/vault/IVault.sol";
import "@balancer-labs/v2-pool-utils/contracts/factories/BasePoolFactory.sol";
import "./WeightedPool.sol";

contract SimpleBalancerInteraction {

    IVault public balancerPool;
    IERC20 public token1;
    IERC20 public token2;
    string contract_name;

    constructor(address _balancerPool, address _token1, address _token2) {
        balancerPool = IVault(_balancerPool);
        token1 = IERC20(_token1);
        token2 = IERC20(_token2);
        contract_name = 'Balancer Pool Interaction'; 
    }

    // Function to provide liquidity to the Balancer pool
    function provideLiquidity(uint256 amountToken1, uint256 amountToken2) external {
        // Assuming tokens are already approved for spending
        token1.transferFrom(msg.sender, address(this), amountToken1);
        token2.transferFrom(msg.sender, address(this), amountToken2);

        token1.approve(address(balancerPool), amountToken1);
        token2.approve(address(balancerPool), amountToken2);
    }

    function getContractName() external view returns (string memory) {
        return contract_name;
    }    

}