import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';
import { Theme } from '@/shared/const/theme';

const meta = {
  title: 'Shared/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  args: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    placeholder: 'text',
  },
  parameters: {
    theme: Theme.LIGHT,
  },
};

export const Dark: Story = {
  args: {},
  parameters: {
    theme: Theme.DARK,
  },
};
