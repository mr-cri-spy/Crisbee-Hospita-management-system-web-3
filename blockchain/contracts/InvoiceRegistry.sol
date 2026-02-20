// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "./AccessManager.sol";

contract InvoiceRegistry {
    AccessManager public access;

    mapping(string => string) public invoiceHashes;

    event InvoiceStored(string indexed invoiceId, string ipfsHash);

    constructor(address accessAddress) {
        access = AccessManager(accessAddress);
    }

    function storeInvoiceHash(string calldata invoiceId, string calldata ipfsHash) external {
        require(access.roles(msg.sender) == AccessManager.Role.Admin, "Admin only");
        invoiceHashes[invoiceId] = ipfsHash;
        emit InvoiceStored(invoiceId, ipfsHash);
    }
}
