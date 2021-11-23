// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Auction {
    address payable public owner;
    uint256 public startDate;
    uint256 public endDate;
    string public ipfsHash;

    enum State {
        Started,
        Running,
        Ended,
        Canceled
    }

    struct Bid {
        uint256 bid;
        address payable bidder;
    }

    State public auctionState;

    uint256 public highestBindingBid;
    address payable public highestBidder;

    Bid[] public bidsArray;
    mapping(address => uint256) public bids;
    uint256 bidIncrement;

    event AuctionStateChange(State auctionState);
    event BidPlaced(uint256 value, address _address);
    event AuctionFinalized(uint256 value, address _address);

    constructor(address EOA) {
        owner = payable(EOA);
        auctionState = State.Running;
        startDate = block.timestamp;
        endDate = startDate + 604800;
        ipfsHash = "";
        bidIncrement = 1000000000000000000;
    }

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    modifier notOwner() {
        require(msg.sender != owner);
        _;
    }

    modifier afterStart() {
        require(block.timestamp >= startDate);
        _;
    }

    modifier beforeEnd() {
        require(block.timestamp <= endDate);
        _;
    }

    function min(uint256 a, uint256 b) internal pure returns (uint256) {
        if (a <= b) {
            return a;
        } else {
            return b;
        }
    }

    function cancelAuction() public onlyOwner {
        auctionState = State.Canceled;
        emit AuctionStateChange(auctionState);
    }

    function finalizeAuction() public {
        require(auctionState == State.Canceled || block.timestamp > endDate);
        require(msg.sender == owner || bids[msg.sender] > 0);

        address payable recipient;
        uint256 value;

        if (auctionState == State.Canceled) {
            recipient = payable(msg.sender);
            value = bids[msg.sender];
        } else {
            //ended
            auctionState = State.Ended;
            emit AuctionStateChange(auctionState);
            if (msg.sender == owner) {
                recipient == msg.sender;
                value = highestBindingBid;
            } else {
                if (msg.sender == highestBidder) {
                    //bidder owner
                    recipient = highestBidder;
                    value = bids[highestBidder] - highestBindingBid;
                } else {
                    // other bidder took it
                    recipient = payable(msg.sender);
                    value = bids[msg.sender];
                }
            }
        }

        bids[recipient] = 0; //reset bids of recipient so next time he calls he won't be a bidder anymore
        recipient.transfer(value);
        emit AuctionFinalized(value, recipient);
    }

    function getBids() public view returns (Bid[] memory) {
        return bidsArray;
    }

    function placeBid() public payable notOwner afterStart beforeEnd {
        require(auctionState == State.Running, "Auction not running");
        require(msg.value >= 100, "Value is not enough");

        uint256 currentBid = bids[msg.sender] + msg.value;
        require(currentBid > highestBindingBid, "Bid not enough");

        bids[msg.sender] = currentBid;

        Bid memory thisBid;
        thisBid.bid = currentBid;
        thisBid.bidder = payable(msg.sender);
        bidsArray.push(thisBid);

        if (currentBid <= bids[highestBidder]) {
            // your own bid
            highestBindingBid = min(
                currentBid + bidIncrement,
                bids[highestBidder]
            );
        } else {
            highestBindingBid = min(
                currentBid,
                bids[highestBidder] + bidIncrement
            );
            highestBidder = payable(msg.sender);
        }

        emit BidPlaced(currentBid, msg.sender);
    }
}
