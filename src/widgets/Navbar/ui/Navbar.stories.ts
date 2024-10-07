import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { Navbar } from './Navbar';

const meta = {
  title: 'Widgets/Navbar',
  component: Navbar,
  args: {},
  parameters: {
    layout: '',
  },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NavbarLight: Story = {
  args: {},
  parameters: {
    theme: Theme.LIGHT,
  },
};

export const NavbarDark: Story = {
  args: {},
  parameters: {
    theme: Theme.DARK,
  },
};
