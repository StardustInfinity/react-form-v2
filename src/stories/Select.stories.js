import React from 'react';

import Select from '../Select';

export default {
  title: 'Select',
  component: Select,
};

const Template = (args) => <Select {...args} />;

export const Option = Template.bind({});
Option.args = {
    options: ["Painting", "Traveling", "Singing"]
};