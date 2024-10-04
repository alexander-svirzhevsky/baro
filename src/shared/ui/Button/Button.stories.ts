import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from './Button';
import { Theme } from '@/shared/const/theme';

const meta = {
  title: 'Shared/Button',
  component: Button,
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    children: 'Light button',
  },
  parameters: {
    theme: Theme.LIGHT,
  },
};

export const Dark: Story = {
  args: {
    children: 'Dark button',
  },
  parameters: {
    theme: Theme.DARK,
  },
};
