import Layout from 'components/_layout'
import AuctionPage from 'pages/auction'
import Home from 'pages/home'
import { Switch, Route } from 'react-router-dom'

export default function Routes() {
  return (
    <Switch>
      <Route exact path='/'>
        <Layout>
          <Home />
        </Layout>
      </Route>
      <Route path='/auction/:auctionAddress'>
        <Layout>
          <AuctionPage />
        </Layout>
      </Route>
    </Switch>
  )
}
