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
  }

  handleSubmit = async (e) => {

    e.preventDefault()
    try {
      await registerUser(this.state.formData)

    } catch (err) {
      console.log(err)
    }
  }


  render() {
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
            <div className='ui animated button' tabIndex='0'>
              <div className='visible content'>
                <Button className='tiny ui button'>Submit</Button>
              </div>
              <div className='hidden content'>
                <i className='send icon'></i>
              </div>
            </div>
            {/* <Button type='submit'>Submit</Button> */}
          </Form>
        </div>
      </>
    )
  }


}


export default Register