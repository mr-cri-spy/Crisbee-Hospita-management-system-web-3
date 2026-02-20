// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "./AccessManager.sol";

contract MedicalRecordRegistry {
    AccessManager public access;

    struct Record {
        string ipfsHash;
        uint256 timestamp;
        address author;
    }

    mapping(string => Record[]) public patientRecords;

    event RecordStored(string indexed patientId, string ipfsHash, address indexed author);

    constructor(address accessAddress) {
        access = AccessManager(accessAddress);
    }

    function storeRecordHash(string calldata patientId, string calldata ipfsHash) external {
        require(uint256(access.roles(msg.sender)) >= uint256(AccessManager.Role.Doctor), "Role denied");
        patientRecords[patientId].push(Record(ipfsHash, block.timestamp, msg.sender));
        emit RecordStored(patientId, ipfsHash, msg.sender);
    }
}
