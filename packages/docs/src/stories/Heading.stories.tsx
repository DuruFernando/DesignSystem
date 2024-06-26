import type { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@duru-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Example Heading',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
      control: { type: 'select' },
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'h1 Heading',
    as: 'h1',
    parameters: {
      docs: {
        description: {
          story:
            'Por padrão o heading sempre será um `h2`, mas podemos alterar isso com a propriedade `as`',
        },
      },
    },
  },
}
