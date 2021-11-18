import { Container } from '../auction-highest-card/styles'

type OffersType = {
  bids: any
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
            <td>Expiration</td>
            <td>Difference</td>
            <td>From</td>
          </tr>
        </thead>
        {bids.length > 0 ? (
          bids.map((bid) => (
            <tr>
              <td>{bid}</td>
            </tr>
          ))
        ) : (
          <tbody>
            <tr>
              <td>No bids yet</td>
            </tr>
          </tbody>
        )}
      </table>
    </Container>
  )
}
