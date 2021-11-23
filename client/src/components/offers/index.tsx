import { Container } from '../auction-highest-card/styles'

type OffersType = {
  bids: { value: number; address: string }[]
  addressLastBid: string
}

export default function Offers({ bids = [], addressLastBid }: OffersType) {
  return (
    <Container>
      <h3>Offers - Your {addressLastBid} </h3>
      <table>
        <thead>
          <tr>
            <td>Price</td>
            <td>From</td>
          </tr>
        </thead>
        <tbody>
          {bids.length > 0 ? (
            bids.map((bid) => (
              <tr key={bid.value}>
                <td>{bid.value}</td>
                <td>{bid.address}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td>No bids yet</td>
            </tr>
          )}
        </tbody>
      </table>
    </Container>
  )
}
