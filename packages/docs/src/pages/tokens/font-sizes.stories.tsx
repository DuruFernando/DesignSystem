import type { StoryObj, Meta } from '@storybook/react'
import { fontSizes } from '@duru-ui/tokens'
import { TokensGrid } from '../../components/TokensGrid'

export default {
  title: 'Tokens/FontSizes',
  component: TokensGrid,
  decorators: [
    () => (
      <div>
        <h1>Fonts Sizes</h1>
        <TokensGrid tokens={fontSizes} hasRemValue />
      </div>
    ),
  ],
  args: {
    children: 'Enviar',
  },
} as Meta

export const FontSizes: StoryObj = {}
