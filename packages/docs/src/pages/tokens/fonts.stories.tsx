import type { StoryObj, Meta } from '@storybook/react'
import { fonts } from '@duru-ui/tokens'
import { TokensGrid } from '../../components/TokensGrid'

export default {
  title: 'Tokens/Fonts',
  component: TokensGrid,
  decorators: [
    () => (
      <div>
        <h1>Fonts</h1>
        <TokensGrid tokens={fonts} />
      </div>
    ),
  ],
  args: {
    children: 'Enviar',
  },
} as Meta

export const Fonts: StoryObj = {}
