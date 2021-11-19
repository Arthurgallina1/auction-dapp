import React from 'react'

import { Button, Logo, Toggle } from 'components'
import { Wrapper } from './styled'
import { useWeb3 } from 'context/web3.context'

const items = [{ label: 'Market' }, { label: 'Gallery' }, { label: 'Others' }]

export const Header: React.FC = () => {
  const { account } = useWeb3()

  return (
    <Wrapper>
      {/* <Container data-testid='container'> */}
      <Logo />
      <Toggle />
      {account ? (
        <span style={{ color: 'white' }}>Acc: {account.slice(0, 5)}</span>
      ) : (
        <Button>Login</Button>
      )}
    </Wrapper>
  )
}
