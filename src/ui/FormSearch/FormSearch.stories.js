import FormSearch from "./FormSearch";
import { action } from "@storybook/addon-actions";

const meta = {
  title: "Common/FormSearch",
  component: FormSearch,
  parameters: {
    layout: "top",
  },
  tags: ["autodocs"],
  argTypes: {
    query: { control: "text" },
    setQuery: { action: "submit" },
    placeholder: { control: "text" },
  },
};

export default meta;

export const Default = {
  args: {
    query: "",
    placeholder: "nhập tên dự án",
    setQuery: () => action("submit"),
  },
};
