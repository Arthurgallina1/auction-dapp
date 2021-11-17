import { Container } from '../auction-highest-card/styles'

type OffersType = {
  bids: any
}

export default function Offers({ bids = [] }: OffersType) {
  return (
    <Container>
      <h3>Offers</h3>
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
