import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonsProps } from '@duru-ui/react'

export default {
  title: 'Home',
  component: Button,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <h1>CERTOOO</h1>
        <Story />
      </div>
    ),
  ],
  args: {
    children: 'Enviar',
  },
} as Meta<ButtonsProps>

export const Primary: StoryObj<ButtonsProps> = {}
export const Big: StoryObj<ButtonsProps> = {
  args: {
    size: 'big',
  },
}
