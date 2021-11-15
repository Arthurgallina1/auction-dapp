import React from 'react'

import { Wrapper, Header } from 'components'
import Hero from 'components/hero'
import Auctions from 'components/auctions-section'

const Home: React.FC = () => {
  return (
    <Wrapper>
      <Header />
      <Hero />
      <Auctions />
    </Wrapper>
  )
}
export default Home
