import React from 'react';
import { Form, Field } from 'react-final-form';
import './App.scss';

const initialValues = {
  firstName: 'Brad',
  lastName: 'Pitt',
  patronym: 'William'
}

class App extends React.Component {

  handleSubmit = async (values) => {
    await console.log(values);
  }

  render() {
    return (
      <div className="App">
        <Form
          onSubmit={ this.handleSubmit }
          initialValues={ initialValues }
          render={ ({ handleSubmit, form }) => (
            <form onSubmit={ event => {
              console.log(form);
              handleSubmit(event).then(() => {
                form.initialize({})
              })
             } }>
              <h2>Form</h2>
              <div className="item">
                <label>First Name</label>
                <Field 
                  name="firstName" 
                  component="input" 
                  placeholder="First Name" 
                />
              </div>
              <div className="item">
                <label>Last Name</label>
                <Field 
                  name="lastName" 
                  component="input" 
                  placeholder="Last Name" 
                />
              </div>
              <div className="item">
                <label>Patronym</label>
                <Field 
                  name="patronym" 
                  component="input" 
                  placeholder="Patronym" 
                />
              </div>
              <button type="submit">
                Send
              </button>
              <button
                type="button"
                onClick={ () => form.initialize({}) }
              >
                Clear
              </button>
              <button
                type="button"
                onClick={ () => form.initialize(initialValues) }
              >
                Return InitialValues
              </button>
            </form>
          ) }
        />
      </div>
    )
  }
}

export default App;
