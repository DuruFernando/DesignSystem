import type { StoryObj, Meta } from '@storybook/react'
import { ColorsGrid } from '../../components/ColorsGrid'

export default {
  title: 'Tokens/Colors',
  component: ColorsGrid,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <h1>Colors</h1>
        <span>Essas são as cores utilizadas no Duru UI</span>
        <Story />
      </div>
    ),
  ],
  args: {
    children: 'Enviar',
  },
} as Meta

export const Colors: StoryObj = {}
