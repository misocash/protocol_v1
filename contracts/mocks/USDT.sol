// SPDX-License-Identifier: MIT

pragma solidity 0.6.12;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract USDT is ERC20 {
    constructor(
        uint256 supply
    ) public ERC20("USDT", "USDT") {
        _mint(msg.sender, supply);
    }
}