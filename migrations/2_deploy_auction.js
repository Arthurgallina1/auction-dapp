let Auction = artifacts.require("./Auction.sol");

module.exports = function(deployer, network, accounts) {
  const owner = accounts[0];
  deployer.deploy(Auction, owner);
};
