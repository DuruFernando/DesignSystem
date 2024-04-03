import type { StoryObj, Meta } from '@storybook/react'
import { fontWeights } from '@duru-ui/tokens'
import { TokensGrid } from '../../components/TokensGrid'

export default {
  title: 'Tokens/FontWeights',
  component: TokensGrid,
  decorators: [
    () => (
      <div>
        <h1>FontWeight</h1>
        <TokensGrid tokens={fontWeights} />
      </div>
    ),
  ],
  args: {
    children: 'Enviar',
  },
} as Meta

export const FontWeights: StoryObj = {}
