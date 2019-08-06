import React from 'react';
import { Form, Field } from 'react-final-form';
import './App.css';

const initialValues = {
  firstName: 'Brad',
  lastName: 'Pitt',
  patronym: 'William'
}

const url = 'mock.address';

class App extends React.Component {

  handleSubmit = async (values) => {
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(values)
    });
  }

  render() {
    return (
      <div className="root">
        <Form
          onSubmit={ this.handleSubmit }
          initialValues={ initialValues }
          validate={ values => {
            const errors = {};
            if (!values.firstName) {
              errors.firstName = "Required";
            }
            if (!values.lastName) {
              errors.lastName = "Required";
            }
            if (!values.patronym) {
              errors.patronym = "Required";
            } 
            return errors;
          } }
          render={ ({ handleSubmit, form, values }) => (
            <form
              className="form"
              onSubmit={ async (event) => {
                await handleSubmit(event);
                Object.keys(values).length === 3 && form.initialize({})
              } }
             >
              <h2 className="header">Form</h2>
              <div className="fields">
                <div className="item">
                  <label className="label">First Name</label>
                  <Field 
                    name="firstName" 
                  >
                    {({ input, meta }) => (
                      <div className="inputWrapper">
                        <input 
                          {...input} 
                          type="text" 
                          placeholder="First Name"
                          className="input" 
                        />
                        {meta.error && meta.touched && <span>{meta.error}</span>}
                      </div>
                    )}
                  </Field>
                </div>
                <div className="item">
                  <label className="label">Last Name</label>
                  <Field 
                    name="lastName" 
                  >
                    {({ input, meta }) => (
                      <div className="inputWrapper">
                        <input 
                          {...input} 
                          type="text" 
                          placeholder="Last Name"
                          className="input" 
                        />
                        {meta.error && meta.touched && <span>{meta.error}</span>}
                      </div>
                    )}
                  </Field>
                </div>
                <div className="item">
                  <label className="label">Patronym</label>
                  <Field 
                    name="patronym" 
                  >
                    {({ input, meta }) => (
                      <div className="inputWrapper">
                        <input 
                          {...input} 
                          type="text" 
                          placeholder="Patronym"
                          className="input" 
                        />
                        {meta.error && meta.touched && <span>{meta.error}</span>}
                      </div>
                    )}
                  </Field>
                </div>
              </div>
              <div className="buttons">
                <button 
                  className="button"
                  type="submit"
                >
                  Send
                </button>
                <button
                  className="button"
                  type="button"
                  onClick={ () => form.initialize({}) }
                >
                  Clear
                </button>
                <button
                  className="button"
                  type="button"
                  onClick={ () => form.initialize(initialValues) }
                >
                  Return InitialValues
                </button>
              </div>
            </form>
          ) }
        />
      </div>
    )
  }
}

export default App;
