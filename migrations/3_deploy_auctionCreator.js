let AuctionCreator = artifacts.require('./AuctionCreator.sol')

module.exports = function (deployer) {
  deployer.deploy(AuctionCreator)
}
