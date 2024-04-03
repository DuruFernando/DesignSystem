import type { StoryObj, Meta } from '@storybook/react'
import { radii } from '@duru-ui/tokens'
import { TokensGrid } from '../../components/TokensGrid'

export default {
  title: 'Tokens/Radii',
  component: TokensGrid,
  decorators: [
    () => (
      <div>
        <h1>Radii</h1>
        <TokensGrid tokens={radii} />
      </div>
    ),
  ],
  args: {
    children: 'Enviar',
  },
} as Meta

export const Radii: StoryObj = {}
