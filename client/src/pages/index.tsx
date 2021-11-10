import React from 'react'

import { Wrapper, Header } from 'components'
import GlobalStyle from 'styles/globalStyles'
import Hero from 'components/hero'
import Auctions from 'components/auctions'

const Home: React.FC = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <Header />
      <Hero />
      <Auctions />
    </Wrapper>
  )
}
export default Home
