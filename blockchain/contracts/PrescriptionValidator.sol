// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "./AccessManager.sol";

contract PrescriptionValidator {
    AccessManager public access;

    mapping(string => bool) public validPrescriptions;

    event PrescriptionValidated(string indexed prescriptionId, bool valid);

    constructor(address accessAddress) {
        access = AccessManager(accessAddress);
    }

    function validatePrescription(string calldata prescriptionId, bool valid) external {
        require(uint256(access.roles(msg.sender)) >= uint256(AccessManager.Role.Doctor), "Doctor+ only");
        validPrescriptions[prescriptionId] = valid;
        emit PrescriptionValidated(prescriptionId, valid);
    }
}
