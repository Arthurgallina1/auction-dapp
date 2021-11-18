import { useEffect, useState } from 'react'
import { useWeb3 } from '../context/web3.context'
import Auction from '../contracts/Auction.json'
import { AuctionState, AuctionStateEnum } from 'data/models'

// doing:  Move all fetching to contract and expose the state only
// to do: move events here
export default function useAuctionContract(auctionAddress) {
  const { account, web3 } = useWeb3()
  const [auctionContract, setAuctionContract] = useState(null)
  const [auctionHighestBid, setauctionHighestBid] = useState<string>('0')
  const [auctioOwner, setAuctionOwner] = useState<string>('')
  const [auctionState, setAuctionState] = useState<AuctionStateEnum>()
  const [auctionBids, setAuctionBids] = useState<number[]>()
  // const [auctionBlocks, setAuctionBlocks] = useState(0)

  // useEffect(() => {
  //   const getCurrentBlock = async () => {
  //     console.log('uno', await web3.eth.getBlockNumber())
  //   }
  //   getCurrentBlock()
  // }, [web3])

  // const [auctionStateChangeEvent, setAuctionStateChangeEvent] = useState()

  useEffect(() => {
    const fetchContractData = async () => {
      if (!auctionContract) return
      const highestBid = await auctionContract.methods
        .highestBindingBid()
        .call()
      setauctionHighestBid(highestBid)

      const owner = await auctionContract.methods.owner().call()
      setAuctionOwner(owner)

      const auctionState = await auctionContract.methods.auctionState().call()
      setAuctionState(AuctionState[auctionState])

      const auctionBids = await auctionContract.methods.getBids().call()
      setAuctionBids(auctionBids)

      const auctionStartBlock = await auctionContract.methods
        .startBlock()
        .call()
      console.log('auctionStartBlock', auctionStartBlock)

      const auctionEndBlock = await auctionContract.methods.endBlock().call()
      console.log('auctionEndBlock', auctionEndBlock)
    }

    fetchContractData()
  }, [auctionContract])

  useEffect(() => {
    const runWeb3 = async () => {
      try {
        if (web3 && account) {
          const instance = new web3.eth.Contract(
            Auction.abi,
            auctionAddress, //deployedNetwork && deployedNetwork.address,
          )
          setAuctionContract(instance)
        }
      } catch (error) {
        alert(
          `Failed to load web3, accounts, or contract. Check console for details.`,
        )
        console.error(error)
      }
    }

    runWeb3()
  }, [web3, account, auctionAddress])

  return {
    auctionContract,
    auctioOwner,
    auctionHighestBid,
    auctionState,
    auctionBids,
  }
}
