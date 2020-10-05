import React from 'react'
import { Form, Input, TextArea, Button, Grid, Header, Image } from 'semantic-ui-react'

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
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='black' textAlign='center'>
            <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR_0XVXWXbh6quw4pprg2muCVE-P3Jt_aG8JQ&usqp=CAU' /> 
        Register as a Local
          </Header>
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
        </Grid.Column>
      </Grid>
    )
  }


}
export default LocalRegister