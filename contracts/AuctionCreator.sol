// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

import './Auction.sol';

contract AuctionCreator {
    Auction[] public auctions;
    
    function getAuctions() external view returns(Auction[] memory) {
        return auctions;
    }

    function createAuction() public {
        Auction newAuction = new Auction(msg.sender);
        auctions.push(newAuction);
    }
}
