import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@duru-ui/react'

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
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}
export const Big: StoryObj<ButtonProps> = {
  args: {
    size: 'big',
  },
}
