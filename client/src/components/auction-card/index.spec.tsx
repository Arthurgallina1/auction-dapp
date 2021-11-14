import { screen } from '@testing-library/react'
import { AuctionStateEnum } from 'data/models'
import { renderWithTheme } from 'test'

import AuctionCard from './index'

const AuctionCardDefaultProps = {
  name: 'Test Auction',
  currentBid: 0,
  user: '0x1234567',
  status: AuctionStateEnum.Running,
}

describe('AuctionCard component testing with testing-library', () => {
  it('renders correclty', () => {
    const component = renderWithTheme(
      <AuctionCard {...AuctionCardDefaultProps} />,
    )

    expect(screen.getByText(/test auction/i)).toBeInTheDocument()
    expect(screen.getByText(AuctionCardDefaultProps.user)).toBeInTheDocument()
    expect(component).toBeTruthy()
  })

  // it('AuctionCard length must be equal to the length of the meta data ', () => {
  //   const { getAllByTestId } = render(<AuctionCard />)

  //   const cardContainer = getAllByTestId('container')
  //   expect(cardContainer).toHaveLength(0)
  // })
})
