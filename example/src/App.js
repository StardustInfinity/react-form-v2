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
