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
