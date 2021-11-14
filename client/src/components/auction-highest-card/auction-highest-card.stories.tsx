import { ComponentStory, ComponentMeta } from '@storybook/react'

import HighestOfferCard from './'

export default {
  title: 'Components/HighestOfferCard',
  component: HighestOfferCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof HighestOfferCard>

const Template: ComponentStory<typeof HighestOfferCard> = (args) => (
  <HighestOfferCard {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  name: 'New Piece',
  currentBid: '300',
  user: '0x1232312',
}
