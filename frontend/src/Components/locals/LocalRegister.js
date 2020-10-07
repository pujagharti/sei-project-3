import React from 'react'
import { Redirect } from 'react-router-dom'
import { Form, Input, TextArea, Button, Grid, Header, Image, Divider } from 'semantic-ui-react'

import { registerUser, updateUser, getUserProfile } from '../../lib/api'
import { isAuthenticated, isLocal } from '../../lib/auth'

import ImageUpload from '../common/ImageUpload'

class LocalRegister extends React.Component {
  state = {
    formData: {
      email: '',
      username: '',
      password: '',
      passwordConfirmation: '',
      bio: '',
      userimagecurrent: '',
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
      if (this.authenticated()) {
        const res = await getUserProfile()
        console.log(res.data.username, res.data.isLocal, res.data.userimage)
        const formData = {
          ...this.state.formData,
          username: res.data.username,
          bio: res.data.bio,
          userimagecurrent: res.data.userimage,
          isLocal: res.data.isLocal
        }
        this.setState({ formData })
      }
      // return isAuthenticated()
    } catch (err) {
      console.log(err)
    }
  }

  handleChange = (e) => {
    console.log(e.target.name, ': ', e.target.value)
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
    // console.log(authenticated, this.state.formData)

    let image = ''
    if (this.state.formData.userimagecurrent && !this.state.formData.userimage) {
      image = this.state.formData.userimagecurrent
    } else {
      image = this.state.formData.userimage
    }

    if (!authenticated) {
      try {
        const dataToSend = ({
          email: this.state.formData.email,
          username: this.state.formData.username,
          password: this.state.formData.password,
          passwordConfirmation: this.state.formData.passwordConfirmation,
          bio: this.state.formData.bio,
          userimage: image,
          isLocal: true
        })
        const res = await registerUser(dataToSend)
        console.log(res)
        isLocal(true)
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
        const dataToSend = ({ bio: this.state.formData.bio, userimage: image, isLocal: true })
        const res = await updateUser(dataToSend)
        isLocal(res.data.isLocal)

        this.setState({
          redirect: '/profile'
        })
      } catch (err) {
        console.log(err)
      }
    }
  }

  render() {
    const { username, email, password, passwordConfirmation, bio, userimagecurrent, userimage, isLocal } = this.state.formData

    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }

    return (
      <>

        <div className='local-register-container'>
          <Grid textAlign='center' style={{ height: 'auto', marginTop: '20px' }} >
            <Grid.Column style={{ maxWidth: 450 }} id='auth-column'>
              <Header as='h2' color='black' textAlign='center'>
                <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR_0XVXWXbh6quw4pprg2muCVE-P3Jt_aG8JQ&usqp=CAU' />
                {(!isLocal) ? 'Register to contribute' : 'Update your profile'}
              </Header>
              <Form onSubmit={this.handleSubmit}>
                {!this.authenticated() &&
                  <>
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
                  </>
                }
                <Form.Group inline>

                </Form.Group>

                {this.authenticated() && !isLocal &&
                  <h3>
                    Thanks for contributing, {username}!<br />
                  Just a bit more about you, and we can get your profile set up
                  </h3>
                }

                {this.authenticated() && isLocal &&
                  <h3>
                    Keep it fresh {username}<br /> Update your public profile here!
                  </h3>
                }

                <Form.Field
                  control={TextArea}
                  label='Tell the community about you'
                  placeholder=" Let Montreal know what you're about..."
                  onChange={this.handleChange}
                  name='bio'
                  value={bio}
                />
                <Form.Field
                  control={ImageUpload}
                  onChange={this.handleImageChange}
                  label='Profile Image'
                />
                {(userimagecurrent && !userimage) ? <Image src={userimagecurrent} /> : ''}
                <Form.Field control={Button}>Submit</Form.Field>
              </Form>
            </Grid.Column>
          </Grid>
        </div>
        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <p>Register</p>
        </Divider>
      </>
    )
  }


}
export default LocalRegister
