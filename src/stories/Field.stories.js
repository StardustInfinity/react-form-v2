import React from 'react';

import Field from '../Field';

export default {
  title: 'Field',
  component: Field,
};

const Template = (args) => <Field {...args} />;

export const Text = Template.bind({});
Text.args = {
  type: 'text'
};

export const Number = Template.bind({});
Number.args = {
  name: 'phoneNumber',
  type: 'number'
};

const emailRegex = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
export const Email = Template.bind({});
Email.args = {
  type: 'email',
  pattern: emailRegex
};