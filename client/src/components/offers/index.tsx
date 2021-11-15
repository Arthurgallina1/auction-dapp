import React from 'react'
import { Container } from '../auction-highest-card/styles'

export default function Offers() {
  return (
    <Container>
      <h3>Offers</h3>
      <OffersTable />
    </Container>
  )
}

const OffersTable = () => {
  return (
    <table>
      <tr>
        <td>Price</td>
        <td>Expiration</td>
        <td>Difference</td>
        <td>From</td>
      </tr>
    </table>
  )
}
