import React from 'react'
import { Redirect } from 'react-router-dom'
import { Button, Form, Grid, Header, Image, Divider } from 'semantic-ui-react'

import { registerUser } from '../../lib/api'
import ImageUpload from '../common/ImageUpload'

class Register extends React.Component {


  state = {
    formData: {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      userimage: ''
    },
    redirect: null
  }

  handleChange = (e) => {
    // console.log(e.target.value)
    const formData = {
      ...this.state.formData,
      [e.target.name]: e.target.value
    }
    this.setState({ formData })
  }

  handleImageChange = url => {
    console.log('uploaded, and url:', url)
    const formData = { ...this.state.formData, userimage: url }
    this.setState({ formData })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const dataToSend = ({ ...this.state.formData })
    try {
      const response = await registerUser(dataToSend)
      console.log('REGULAR REGISTRATION', response)
      if (response.status === 201) {
        this.setState({
          redirect: '/login'
        })
      }
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    const { username, email, password, passwordConfirmation } = this.state.formData

    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }

    return (
      <>
        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '6em 10em', textTransform: 'uppercase' }}
        >
          <a href='#'>Register</a>
        </Divider>
        <Grid textAlign='center' style={{ height: 'auto', marginTop: '20px' }} >
          <Grid.Column style={{ maxWidth: 450 }} id='auth-column'>
            <Header as='h2' color='black' textAlign='center'>
              <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR_0XVXWXbh6quw4pprg2muCVE-P3Jt_aG8JQ&usqp=CAU' />
            Register your account
            </Header>
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
                <Form.Field
                  control={ImageUpload}
                  onChange={this.handleImageChange}
                  label='Profile Image'
                />
                <Form.Field
                  control={Button}>
                  <div className='tiny ui animated button' tabIndex='0'>
                    <div className='visible content'>
                      <div className='tiny ui button'>Submit</div>
                    </div>
                    <div className='hidden content'>
                      <i className='send icon'></i>
                    </div>
                  </div>
                </Form.Field>
              </Form>
            </div>
          </Grid.Column>
        </Grid>
        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '6em 10em', textTransform: 'uppercase' }}
        >
          <a href='#'>.</a>
        </Divider>
      </>
    )
  }


}


export default Register