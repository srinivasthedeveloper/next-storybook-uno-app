// uno.config.ts
import { defineConfig, presetAttributify, presetWind3 } from "unocss";
import { tokens } from "./lib/design-tokens";
import { rules } from "./lib/rules";
import { shortcuts } from "./lib/shortcuts";

export default defineConfig({
  presets: [presetWind3(), presetAttributify()],
  theme: {
    colors: tokens.colors,
    spacing: tokens.spacing,
    fontFamily: tokens.typography.fontFamily,
    fontSize: tokens.typography.fontSize,
  },
  rules: rules,
  shortcuts: shortcuts,
  safelist: ["btn-primary", "btn-secondary", "btn-success"], // Pre-generate these classes irrespective of their usage
});
