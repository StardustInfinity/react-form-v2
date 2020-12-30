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
npx sb init
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
            title="Name: "
            type="text" 
            name="userName" 
            placeholder="Enter Full Name"
          />
          <Field 
            title="Email: "
            type="text" 
            name="email" 
            // customValidation={someCustomValidation} 
            pattern={emailRegex}
            placeholder="user@example.com"
          />
          <Field
            title="Phone Number: "
            type="number" 
            name="phoneNumber"
            placeholder="Enter 10-digit number"
            />
          <Select 
            title="Hobby: "
            options={["Painting", "Traveling", "Singing"]} 
            name="hobby"
            />
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
