import React from 'react'
import { Form, Input, TextArea, Button } from 'semantic-ui-react'

class LocalRegister extends React.Component {
  state = { 
    formData: {
      email: '',
      username: '',
      password: '',
      passwordConfirmation: '',
      bio: ''
    }
  }


  handleChange = (e) => {
    const formData = {
      ...this.state.formData,
      [e.target.name]: e.target.value
    }
    this.setState({
      formData
    })
  }



  render() {
    const { username, email, password, passwordConfirmation, bio } = this.state.formData

    return (
      <Form>
        <Form.Group widths='equal'>
          <Form.Field
            control={Input}
            label='User name'
            placeholder='User name'
            onChange={this.handleChange}
            name='username'
            value={username}
          />
          <Form.Field
            control={Input}
            label='Email'
            placeholder='Email'
            onChange={this.handleChange}
            name='email'
            value={email}

          />
          <Form.Field
            control={Input}
            label='Password'
            placeholder='Password'
            onChange={this.handleChange}
            name='password'
            value={password}
        

          />
          <Form.Field
            control={Input}
            label='Password confirmation'
            placeholder='Password confirmation'
            onChange={this.handleChange}
            name='passwordConfirmation'
            value={passwordConfirmation}

          />
        </Form.Group>
        <Form.Group inline>

        </Form.Group>
        <Form.Field
          control={TextArea}
          label='About'
          placeholder='Tell us more about you and your location...'
          onChange={this.handleChange}
          name='bio'
          value={bio}

        />

        <Form.Field control={Button}>Submit</Form.Field>
      </Form>
    )
  }


}
export default LocalRegister