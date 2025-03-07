import type { Preview } from "@storybook/react";
import "@unocss/core";
import "../../public/uno.css";
import "../../public/fonts.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
