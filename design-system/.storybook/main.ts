import type { StorybookConfig } from "@storybook/nextjs";
const path = require("path");

const config: StorybookConfig = {
  stories: [
    // "../stories/**/*.mdx",
    "../**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  staticDirs: ["../../public"],
  webpackFinal: async (config) => {
    config?.resolve?.modules?.push(path.resolve(__dirname, "../../"));
    return config;
  },
};
export default config;
