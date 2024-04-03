import type { StoryObj, Meta } from '@storybook/react'
import { space } from '@duru-ui/tokens'
import { TokensGrid } from '../../components/TokensGrid'

export default {
  title: 'Tokens/Spaces',
  component: TokensGrid,
  decorators: [
    () => (
      <div>
        <h1>Space</h1>
        <TokensGrid tokens={space} hasRemValue />
      </div>
    ),
  ],
  args: {
    children: 'Enviar',
  },
} as Meta

export const Spaces: StoryObj = {}
