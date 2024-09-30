import { Checkboxes } from ".";

export default {
  title: "Components/Checkboxes",
  component: Checkboxes,
  argTypes: {
    type: {
      options: ["error-indeterminate", "indeterminate", "unselected", "error-unselected", "selected", "error-selected"],
      control: { type: "select" },
    },
    stateProp: {
      options: ["enabled", "pressed", "focused", "hovered", "disabled"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "error-indeterminate",
    stateProp: "enabled",
    typeSelectedStateClassName: {},
  },
};
