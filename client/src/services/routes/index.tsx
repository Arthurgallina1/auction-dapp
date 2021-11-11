import AuctionPage from 'pages/auction'
import Home from 'pages/home'
import { Switch, Route } from 'react-router-dom'

export default function Routes() {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/auctions/:auction'>
        <AuctionPage />
      </Route>
    </Switch>
  )
}
