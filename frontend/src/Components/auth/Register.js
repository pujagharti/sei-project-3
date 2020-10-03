import React from 'react'
import { Button, Form } from 'semantic-ui-react'

import { registerUser } from '../../lib/api'

class Register extends React.Component {


  state = {
    formData: {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    }
  }

  handleChange = (e) => {
    const formData = {
      ...this.state.formData,
      [e.target.name]: e.target.value
    }
    this.setState({ formData })
    //console.log(this.state)  
  }

  handleSubmit = async (e) => {

    e.preventDefault()
    try {
      console.log('>>>>submitting')
      const response = await registerUser(this.state.formData)
      console.log(response)

    } catch (err) {
      console.log(err)
    }
  }


  render() {
    console.log('About to post 🚀')
    const { username, email, password, passwordConfirmation } = this.state.formData

    return (

      <>
        <div className='ui container size mini'>
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <label>Username</label>
              <input placeholder='username'
                onChange={this.handleChange}
                value={username}
                name='username'
              />
            </Form.Field>
            <Form.Field>
              <label>Email</label>
              <input placeholder='email'
                onChange={this.handleChange}
                value={email}
                name='email'
              />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input placeholder='password'
                onChange={this.handleChange}
                value={password}
                name='password'
              />
            </Form.Field>
            <Form.Field>
              <label>Password Confirmation</label>
              <input placeholder='password confirmation'
                onChange={this.handleChange}
                value={passwordConfirmation}
                name='passwordConfirmation'
              />
            </Form.Field>

            <Button type='submit'>Submit</Button>
          </Form>
        </div>
      </>
    )
  }


}


export default Register