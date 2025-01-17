// contracts/HelloWorld.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

contract HelloWorld {
    string private message;

    constructor() {
        message = "Hello, World!!!";
    }

    function getMessage() external view returns (string memory) {
        return message;
    }
}