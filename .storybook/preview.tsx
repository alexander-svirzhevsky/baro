import type { Preview } from '@storybook/react';
import { StyleDecorator, ThemeDecorator } from '../src/shared/config/storybook';

const preview: Preview = {
  decorators: [ThemeDecorator, StyleDecorator],
};

export default preview;
