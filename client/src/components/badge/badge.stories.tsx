import { ComponentStory, ComponentMeta } from '@storybook/react'
import { RiAuctionFill } from 'react-icons/ri'
import Badge from './'

export default {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Badge>

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />

export const Primary = Template.bind({})
Primary.args = {
  icon: <RiAuctionFill color='white' />,
  onClick: () => console.log('click'),
}

export const Secondary = Template.bind({})
Secondary.args = {
  icon: <RiAuctionFill color='blue' />,
  onClick: () => console.log('click'),
  color: 'white',
}
