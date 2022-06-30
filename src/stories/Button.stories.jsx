import React from 'react';
import {Button} from "../library/button/Button";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  argTypes: { emitClickEvent: { action: 'clicked' } },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args}>Button</Button>;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
};

export const Warn = Template.bind({});
Warn.args = {
  warn: true,
};

export const Error = Template.bind({});
Error.args = {
  error: true,
};