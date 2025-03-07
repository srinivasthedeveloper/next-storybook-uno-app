import { Button } from "../../../src/Molecules/Button";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "Molecules/Button",
  component: Button,
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "ternary"],
    },
    onClick: { action: "clicked" },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { children: "Primary", variant: "primary" },
};
export const Secondary: Story = {
  args: { children: "Secondary", variant: "secondary" },
};
export const Ternary: Story = {
  args: { children: "Ternary", variant: "ternary" },
};
