import Card from "./Card";

const meta = {
  title: "Common/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    project: {
      control: "object",
      defaultValue: {
        name: "John Doe",
        status: "Hoan thanh",
        projectCode: "123",
        lead: {
          control: "object",
          defaultValue: {
            nameAvatar: "abc",
          },
        },
      },
    },
  },
};

export default meta;

export const Default = {
  args: {
    project: {
      name: "John Doe",
      status: "Hoan thanh",
      projectCode: "123",
    },
  },
};
