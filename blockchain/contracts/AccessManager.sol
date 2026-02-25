// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract AccessManager {
    enum Role { None, Admin, Doctor, Nurse, Receptionist }

    address public owner;
    mapping(address => Role) public roles;

    event RoleAssigned(address indexed account, Role role);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        _;
    }

    modifier onlyAuthorized(Role minimumRole) {
        require(uint256(roles[msg.sender]) >= uint256(minimumRole), "Unauthorized role");
        _;
    }

    constructor() {
        owner = msg.sender;
        roles[msg.sender] = Role.Admin;
    }

    function assignRole(address account, Role role) external onlyOwner {
        roles[account] = role;
        emit RoleAssigned(account, role);
    }
}
