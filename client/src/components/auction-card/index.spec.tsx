import { render } from 'test'

import AuctionCard from './index'

describe('AuctionCard component testing with testing-library', () => {
  it('renders without crashing', () => {
    const component = render(<AuctionCard />)

    expect(component).toBeTruthy()
  })

  it('AuctionCard length must be equal to the length of the meta data ', () => {
    const { getAllByTestId } = render(<AuctionCard />)

    const cardContainer = getAllByTestId('container')
    expect(cardContainer).toHaveLength(0)
  })
})
