import React from 'react'

import { Logo, Toggle } from 'components'
import { Wrapper, Container } from './styled'
import { useWeb3 } from 'context/web3.context'

const items = [{ label: 'Market' }, { label: 'Gallery' }, { label: 'Others' }]

export const Header: React.FC = () => {
  const { account } = useWeb3()

  return (
    <Wrapper>
      <Container data-testid='container'>
        <Logo />
        <Toggle />
        {account && <span style={{ color: 'white' }}>Acc: {account}</span>}
      </Container>
    </Wrapper>
  )
}
