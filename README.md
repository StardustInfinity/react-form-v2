# @twinkledas/react-form-v2
This is a react-form library.

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/@twinkledas/react-form.svg)](https://www.npmjs.com/package/@twinkledas/react-form) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @twinkledas/react-form-v2
```

## Storybook
To check the components, run 
```bash
npm run storybook
```

To see the example of working app,
```
cd example
npm i
npm run start
```
### File Entry Point
https://github.com/StardustInfinity/react-form-v2/blob/master/src/index.js

## Usage

```jsx
import React from 'react'

import { ReactForm, Field, Select } from '@twinkledas/react-form'
import '@twinkledas/react-form/dist/index.css'

const emailRegex = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"

function someCustomValidation(value) {
  console.log('some custom validation')
  console.log(value)
  return false;
}

class App extends React.Component {
  handleFormSubmit(values) {
    // Make an API call
    
    console.log(values)
  }
  render() {
    return (
      <div className="App">
        <ReactForm onSubmit={this.handleFormSubmit}>
          <Field 
            type="text" 
            name="email" 
            // customValidation={someCustomValidation} 
            pattern={emailRegex} 
          />
          <Field type="text" name="phoneNumber" />
          <Select options={["orange", "apple", "banana"]} name="fruit" />
          <button type="submit">Submit</button>
        </ReactForm>
      </div>
    );
  }
}

export default App

```

## License

MIT © [StardustInfinity](https://github.com/StardustInfinity)
