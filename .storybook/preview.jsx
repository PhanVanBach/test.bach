/** @type { import('@storybook/react').Preview } */

import GlobalStyles from "../src/styles/GlobalStyles";

const preview = {
  decorators: [
    (Story) => {
      return (
        <>
          <GlobalStyles />
          <Story />
        </>
      );
    },
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
