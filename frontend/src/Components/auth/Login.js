import React from 'react'
import { Button, Form, Grid, Header, Image } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'

import { loginUser } from '../../lib/api'
import { setToken } from '../../lib/auth'

class Login extends React.Component {

  state = {
    formData: {
      email: '',
      password: ''
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
      const res = await loginUser(this.state.formData)

      setToken(res.data.token)

      this.setState({
        redirect: '/features'
      })

    } catch (err) {
      console.log(err)
    }
  }


  render() {

    const { email, password } = this.state.formData

    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }

    return (
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='black' textAlign='center'>
            <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR_0XVXWXbh6quw4pprg2muCVE-P3Jt_aG8JQ&usqp=CAU' /> 
            Log-in to your account
          </Header>
          <div className='ui container small'>
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
          </div>
        </Grid.Column>
      </Grid>
    )
  }

}

export default Login