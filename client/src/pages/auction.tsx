import { Button } from 'components'
import { AuctionState } from 'data/models'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import getWeb3 from 'services/web3'
import Web3 from 'web3'
import Auction from '../contracts/Auction.json'

export default function AuctionPage() {
  const { auction } = useParams()

  const [auctionInstance, setAuctionInstance] = useState(null)
  const [auctionState, setAuctionState] = useState('')
  const [auctionBids, setAuctionBids] = useState([])
  const [account, setAccount] = useState<any>([])

  useEffect(() => {
    const runWeb3 = async () => {
      try {
        // Get network provider and web3 instance.
        const web3 = await getWeb3()
        // Use web3 to get the user's accounts.
        const accounts = await web3.eth.getAccounts()
        console.log(accounts)
        // const account2 = await web3.eth.accounts.create()

        // console.log(typeof account2.address)

        setAccount([accounts[0], '0xDE61d31ed0Ed100c7Ac09712fEe1470aa2a17c44'])
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
        const auctionBids = await instance.methods.getBids().call()
        setAuctionBids(auctionBids)
        // const owner = await instance.methods.owner().call()
        setAuctionState(AuctionState[auctionState])

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

      auctionInstance.events
        .BidPlaced({})
        .on('data', function (event) {
          console.log(event) // same results as the optional callback above
          const { value, _address } = event.returnValues
          setAuctionBids((auctionBids) => [...auctionBids, value])
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
      console.debug('zcc', account[1])
      const amount = await auctionInstance.methods.placeBid().send({
        from: account[0],
        value: 2555,
      })
    } catch (err) {
      console.log(err)
    }
  }

  const cancelAuction = async () => {
    const auctionState = await auctionInstance.methods
      .cancelAuction()
      .send({ from: account[0] })
    // console.log(auctionState)
  }

  const getStatus = async () => {
    const auctionState = await auctionInstance.methods.auctionState().call()
    console.log(auctionState)
  }

  return (
    <div>
      Logged as {account[0]}
      <h3>Auction #{auction}</h3>
      Auction State: {auctionState}
      Bids:{' '}
      {auctionBids.map((bid) => (
        <p>{bid}</p>
      ))}
      <Button onClick={placeBid}>Place a bid</Button>
      <Button onClick={cancelAuction}>Cancel Auction</Button>
      <Button onClick={getStatus}>Get status a bid</Button>
      {/* Auction Owner: {auctionowner} */}
    </div>
  )
}
