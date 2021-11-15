import { Button } from 'components'
import AuctionPageView from 'components/auction-page-view'
import { useWeb3 } from 'context/web3.context'
import { AuctionState, AuctionStateEnum } from 'data/models'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Auction from '../contracts/Auction.json'

// type AuctionInstaceType = {
//   methods: {
//     auctionState: ContractFunctionType
//     placeBid: ContractFunctionType
//     cancelAuction: ContractFunctionType
//   }
//   events: any
// }

export default function AuctionPage() {
  const { auction } = useParams()

  const [auctionInstance, setAuctionInstance] = useState(null)
  const [auctionState, setAuctionState] = useState<AuctionStateEnum>()
  const [auctionBids, setAuctionBids] = useState([])
  // const [account, setAccount] = useState<any>([])
  const { account, web3 } = useWeb3()

  useEffect(() => {
    const runWeb3 = async () => {
      try {
        if (web3 && account) {
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
        }

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
  }, [web3, account])

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
      console.debug('zcc', account)
      await auctionInstance.methods.placeBid().send({
        from: account,
        value: 555555,
      })
    } catch (e) {
      const data = e.data
      console.log(e)
    }
  }

  const cancelAuction = async () => {
    await auctionInstance.methods.cancelAuction().send({ from: account[0] })
  }

  const getStatus = async () => {
    const auctionState = await auctionInstance.methods.auctionState().call()
    console.log(auctionState)
  }

  return (
    <div>
      <AuctionPageView
        name={auction}
        auctionState={auctionState}
        bids={auctionBids}
        placeBid={placeBid}
      />
      {/* <Button onClick={placeBid}>Place a bid</Button> */}
      <Button onClick={cancelAuction}>Cancel Auction</Button>
      {/* <Button onClick={getStatus}>Get status a bid</Button> */}
    </div>
  )
}
