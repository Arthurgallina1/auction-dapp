import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import AuctionCard from './'

export default {
  title: 'Components/AuctionCard',
  component: AuctionCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AuctionCard>

const Template: ComponentStory<typeof AuctionCard> = (args) => (
  <AuctionCard {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  name: 'New Piece',
  currentBid: '300',
  user: '0x1232312',
}
