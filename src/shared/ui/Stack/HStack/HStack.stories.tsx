import type { Meta, StoryObj } from '@storybook/react';

import { HStack } from './HStack';
import { Theme } from '@/shared/const/theme';

const meta = {
  title: 'Shared/Flex/HStack',
  component: HStack,
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
} satisfies Meta<typeof HStack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Align: Story = {
  args: {
    align: 'center',
    style: {
      height: '100vh',
    },
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
