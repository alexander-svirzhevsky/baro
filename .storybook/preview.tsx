import type { Preview } from '@storybook/react';
import { StyleDecorator, ThemeDecorator } from '../src/shared/config/storybook';

const preview: Preview = {
  parameters: {
    layout: 'centered',
  },
  decorators: [ThemeDecorator, StyleDecorator],
};

export default preview;
