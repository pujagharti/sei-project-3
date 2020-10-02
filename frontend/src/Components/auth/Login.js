import React from 'react'
import { Button, Form } from 'semantic-ui-react'

import { loginUser } from '../../lib/api'

class Login extends React.Component {

  state = {
    formData: {
      email: '',
      password: ''
    }
  }

  handleChange = (e) =>{
    const formData = {
      ...this.state.formData,
      [e.target.name]: e.target.value
    }
    this.setState({ formData })
  } 


  handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await loginUser(this.state.formData)
      console.log(res)
    } catch (err) {
      console.log(err)
    }

  }


  render() {

    const { email, password } = this.state.formData

    return (

      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>email</label>
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

        <Button type='submit'>Submit</Button>
      </Form>
    )
  }

}

export default Login