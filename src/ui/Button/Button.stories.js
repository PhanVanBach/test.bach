import Button from "./Button";
import { fn } from "@storybook/test";

const meta = {
  title: "Common/Button",
  component: Button,
  parameters: {
    layout: "top",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: { onClick: fn() },
};

export default meta;

export const Primary = {
  args: {
    primary: true,
    children: "Tìm kiếm",
  },
};

export const Secondary = {
  args: {
    children: "Tìm kiếm",
  },
};

export const Large = {
  args: {
    size: "large",
    children: "Tìm kiếm",
  },
};

export const Small = {
  args: {
    size: "small",
    children: "Tìm kiếm",
  },
};
