import { StyledThemeProvider } from 'definitions/styled-components'

import Routes from 'services/routes'
import { Router } from 'react-router-dom'
import history from 'services/history'

function App(): JSX.Element {
  return (
    <StyledThemeProvider>
      <Router history={history}>
        <Routes />
      </Router>
    </StyledThemeProvider>
  )
}

export default App
