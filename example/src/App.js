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
