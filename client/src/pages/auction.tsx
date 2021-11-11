import { Button } from 'components'
import { AuctionState } from 'data/models'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import getWeb3 from 'services/web3'
import Auction from '../contracts/Auction.json'

export default function AuctionPage() {
  const { auction } = useParams()

  const [auctionInstance, setAuctionInstance] = useState(null)
  const [auctionState, setAuctionState] = useState('')
  const [account, setAccount] = useState('')

  useEffect(() => {
    const runWeb3 = async () => {
      try {
        // Get network provider and web3 instance.
        const web3 = await getWeb3()
        // Use web3 to get the user's accounts.
        const accounts = await web3.eth.getAccounts()
        setAccount(accounts[0])
        // Get the contract instance.
        const networkId = await web3.eth.net.getId()
        const deployedNetwork = Auction.networks[networkId]
        console.log(networkId, deployedNetwork)
        const instance = new web3.eth.Contract(
          Auction.abi,
          deployedNetwork && deployedNetwork.address,
        )
        setAuctionInstance(instance)
        const auctionState = await instance.methods.auctionState().call()
        const owner = await instance.methods.owner().call()
        setAuctionState(AuctionState[auctionState])

        console.log(owner)
        //      deployedNetwork && deployedNetwork.address,
      } catch (error) {
        // Catch any errors for any of the above operations.
        alert(
          `Failed to load web3, accounts, or contract. Check console for details.`,
        )
        console.error(error)
      }
    }

    runWeb3()
  }, [])

  useEffect(() => {
    if (auctionInstance) {
      auctionInstance.events
        .AuctionStateChange({})
        .on('data', function (event) {
          console.log(event) // same results as the optional callback above
          const { auctionState } = event.returnValues
          console.debug('returned values', event.returnValues)
          setAuctionState(AuctionState[auctionState])
        })
        .on('changed', function (event) {
          console.debug('event changed', event)

          // remove event from local database
        })
        .on('error', console.error)
    }
  }, [auctionInstance])

  const placeBid = async () => {
    try {
      const amount = await auctionInstance.methods
        .placeBid()
        .send({ from: account, value: 155 })
    } catch (err) {
      console.log(err)
    }
  }

  const cancelAuction = async () => {
    const auctionState = await auctionInstance.methods
      .cancelAuction()
      .send({ from: account })
    // console.log(auctionState)
  }

  const getStatus = async () => {
    const auctionState = await auctionInstance.methods.auctionState().call()
    console.log(auctionState)
  }

  return (
    <div>
      Logged as {account}
      <h3>Auction #{auction}</h3>
      Auction State: {auctionState}
      <Button onClick={cancelAuction}>Place a bid</Button>
      <Button onClick={getStatus}>Get status a bid</Button>
      {/* Auction Owner: {auctionowner} */}
    </div>
  )
}
