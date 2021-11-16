import { useEffect, useState } from 'react'
import { useWeb3 } from '../context/web3.context'
import Auction from '../contracts/Auction.json'
import { AuctionState, AuctionStateEnum } from 'data/models'

export default function useAuctionContract() {
  const { account, web3 } = useWeb3()
  const [auctionContract, setAuctionContract] = useState(null)

  const getAuctionState = async (): Promise<AuctionStateEnum> => {
    if (!auctionContract) return

    const auctionState = await auctionContract.methods.auctionState().call()
    console.log(AuctionState[auctionState])
    return AuctionState[auctionState]
  }

  useEffect(() => {
    const runWeb3 = async () => {
      try {
        if (web3 && account) {
          // Get the contract instance.
          const networkId = await web3.eth.net.getId()
          const deployedNetwork = Auction.networks[networkId]
          const instance = new web3.eth.Contract(
            Auction.abi,
            deployedNetwork && deployedNetwork.address,
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
  }, [web3, account])

  return { auctionContract, getAuctionState }
}
