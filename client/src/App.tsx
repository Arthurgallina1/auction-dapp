import { StyledThemeProvider } from 'definitions/styled-components'

import Routes from 'services/routes'
import { Router } from 'react-router-dom'
import history from 'services/history'
import GlobalStyle from 'styles/globalStyles'
import Web3ContextProvider from 'context/web3.context'

function App(): JSX.Element {
  return (
    <StyledThemeProvider>
      <Web3ContextProvider>
        <GlobalStyle />
        <Router history={history}>
          <Routes />
        </Router>
      </Web3ContextProvider>
    </StyledThemeProvider>
  )
}

export default App
