import { Button } from "../../../src/Atoms/Button";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
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
  args: {
    children: "Primary",
    variant: "primary",
    size: "md",
    disabled: false,
    loading: false,
  },
};
export const Secondary: Story = {
  args: {
    children: "Secondary",
    variant: "secondary",
    size: "md",
    disabled: false,
    loading: false,
  },
};
export const Ternary: Story = {
  args: {
    children: "Ternary",
    variant: "ternary",
    size: "md",
    disabled: false,
    loading: false,
  },
};
