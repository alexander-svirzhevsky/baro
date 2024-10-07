import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Modal } from './Modal';
import { Theme } from '@/shared/const/theme';

const meta = {
  title: 'Shared/Modal',
  component: Modal,
  args: {
    children: 'Modal content',
    isOpened: true,
    onClose: fn(),
  },
  decorators: [
    (Story) => (
      <div id="app">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  parameters: {
    theme: Theme.LIGHT,
  },
};

export const Dark: Story = {
  parameters: {
    theme: Theme.DARK,
  },
};
