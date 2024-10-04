import React from 'react'; // TODO: remove
import type { Preview } from '@storybook/react';
import '../src/app/styles/index.scss'; // TODO: remove

const preview: Preview = {
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story, { parameters }) => {
      const { theme } = parameters;

      return (
        <div className={theme}>
          <Story />
        </div>
      );
    },
  ],
};

export default preview;
