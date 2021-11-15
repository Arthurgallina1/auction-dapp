import { screen } from '@testing-library/react'
import { RiAuctionFill } from 'react-icons/ri'
import { renderWithTheme } from 'test'

import Badge from './index'

const AuctionCardDefaultProps = {
  color: 'blue',
  icon: <RiAuctionFill />,
}

describe('AuctionCard component testing with testing-library', () => {
  it('renders correclty', () => {
    const iconClick = jest.fn()
    const component = renderWithTheme(
      <Badge {...AuctionCardDefaultProps} onClick={iconClick} />,
    )
    expect(iconClick).not.toHaveBeenCalled()
    // expect(component.container.children).toHaveStyle('color: blue')
  })
})
