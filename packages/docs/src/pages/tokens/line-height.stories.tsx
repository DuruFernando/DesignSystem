import type { StoryObj, Meta } from '@storybook/react'
import { lineHeights } from '@duru-ui/tokens'
import { TokensGrid } from '../../components/TokensGrid'

export default {
  title: 'Tokens/LineHeight',
  component: TokensGrid,
  decorators: [
    () => (
      <div>
        <h1>Line Heights</h1>
        <TokensGrid tokens={lineHeights} />
      </div>
    ),
  ],
  args: {
    children: 'Enviar',
  },
} as Meta

export const LineHeight: StoryObj = {}
