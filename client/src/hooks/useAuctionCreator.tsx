import { useEffect, useState } from 'react'
import { useWeb3 } from '../context/web3.context'
import AuctionCreator from '../contracts/AuctionCreator.json'

export default function useAuctionCreator() {
  const { account, web3 } = useWeb3()
  const [auctionCreatorInstance, setAuctionCreatorInstance] = useState(null)
  const [auctions, setAuctions] = useState([])

  const createAuction = async () => {
    if (!auctionCreatorInstance) return
    const auctionCreated = await auctionCreatorInstance.methods
      .createAuction()
      .send({ from: account })
    return auctionCreated
  }

  useEffect(() => {
    const getAuctions = async () => {
      if (!auctionCreatorInstance) return []
      const auctions = await auctionCreatorInstance.methods.getAuctions().call()
      setAuctions(auctions)
      return auctions
    }

    getAuctions()
  }, [auctionCreatorInstance])

  useEffect(() => {
    const runWeb3 = async () => {
      try {
        if (web3 && account) {
          const networkId = await web3.eth.net.getId()
          const deployedNetwork = AuctionCreator.networks[networkId]
          const instance = new web3.eth.Contract(
            AuctionCreator.abi,
            deployedNetwork && deployedNetwork.address,
          )
          setAuctionCreatorInstance(instance)
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

  return { auctionCreatorInstance, auctions, createAuction }
}
