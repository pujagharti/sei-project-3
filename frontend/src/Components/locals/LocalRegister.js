import React from 'react'
import { Redirect } from 'react-router-dom'
import { Form, Input, TextArea, Button, Grid, Header, Image } from 'semantic-ui-react'
import { registerUser, updateUser, getUserProfile } from '../../lib/api'
import { isAuthenticated } from '../../lib/auth'
import ImageUpload from '../common/ImageUpload'
class LocalRegister extends React.Component {
  state = {
    formData: {
      email: '',
      username: '',
      password: '',
      passwordConfirmation: '',
      bio: '',
      userimage: '',
      isLocal: false
    },
    redirect: null
  }
  authenticated() {
    return isAuthenticated()
  }
  async componentDidMount() {
    try {
      console.log('DidMount')
      if (this.authenticated()){
        const res = await getUserProfile()
        console.log(res.data.username, res.data.isLocal)
        const formData = { ...this.state.formData, username: res.data.username, bio: res.data.bio, isLocal: res.data.isLocal }
        this.setState({ formData })
      }
    } catch (err) {
      console.log(err)
    }
  }
  handleChange = (e) => {
    // console.log(e.target.value)
    const formData = {
      ...this.state.formData,
      [e.target.name]: e.target.value
    }
    this.setState({
      formData
    })
  }
  handleImageChange = url => {
    console.log('uploaded, and url:', url)
    const formData = { ...this.state.formData, userimage: url }
    this.setState({ formData })
  }
  handleSubmit = async (e) => {
    e.preventDefault()
    const authenticated = this.authenticated()
    console.log(authenticated)
    const dataToSend = ({ ...this.state.formData, isLocal: true })
    console.log(dataToSend)
    if (!authenticated) {
      try {
        const response = await registerUser(dataToSend)
        console.log(response)
        this.setState({
          redirect: '/login'
        })
        return
      } catch (err) {
        console.log(err)
      }
    }
    if (authenticated) {
      try {
        const dataToSend = ({ bio: this.state.formData.bio, isLocal: true, userimage: this.state.formData.userimage })
        // const dataToSend = ({ ...this.state.formData, isLocal: true })
        const res = await updateUser(dataToSend)
        console.log(res)
        this.setState({
          redirect: '/profile'
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
  render() {
    const { username, email, password, passwordConfirmation, bio, isLocal } = this.state.formData
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    return (
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='black' textAlign='center'>
            <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR_0XVXWXbh6quw4pprg2muCVE-P3Jt_aG8JQ&usqp=CAU' />
            {(!isLocal) ? 'Register as a Local' : 'Update your local profile'}
          </Header>
          <div className='ui container size mini'>
            <Form onSubmit={this.handleSubmit}>
              {!this.authenticated() &&
                <div className='ui container size mini'>
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
                </div>
              }
              {this.authenticated() &&
                <h3>{username} Thanks for your interest in contributing! Just a bit more about you, and we can get your profile set up </h3>
              }
              <Form.Field
                control={TextArea}
                label='About'
                placeholder='Tell us more about you and your location...'
                onChange={this.handleChange}
                name='bio'
                value={bio}
              />
              <Form.Field
                control={ImageUpload}
                onChange={this.handleImageChange}
                label='Profile Image'
              />
              <Form.Field control={Button}>Submit</Form.Field>
            </Form>
          </div>
        </Grid.Column>
      </Grid>
    )
  }
}
export default LocalRegister