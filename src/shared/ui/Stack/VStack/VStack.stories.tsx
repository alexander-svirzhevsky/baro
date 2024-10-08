import type { Meta, StoryObj } from '@storybook/react';

import { VStack } from './VStack';
import { Theme } from '@/shared/const/theme';

const meta = {
  title: 'Shared/Flex/VStack',
  component: VStack,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    children: (
      <>
        <div style={{ backgroundColor: 'pink', padding: '16px' }}>child 1</div>
        <div style={{ backgroundColor: 'pink', padding: '16px' }}>child 2</div>
        <div style={{ backgroundColor: 'pink', padding: '16px' }}>child 3</div>
      </>
    ),
  },
} satisfies Meta<typeof VStack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Align: Story = {
  args: {
    align: 'start',
  },
  parameters: {
    theme: Theme.LIGHT,
  },
};

export const Justify: Story = {
  args: {
    justify: 'center',
  },
  parameters: {
    theme: Theme.LIGHT,
  },
};
