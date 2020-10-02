import React from 'react'
// import { Button, Form } from 'semantic-ui-react'

// import { registerUser } from '../../lib/api'

class Register extends React.Component {


  // state = {
  //   formData: {
  //     username: '',
  //     email: '',
  //     password: '',
  //     passwordConfirm: ''
  //   }
  // }

  // handleChange = (e) => {
  //   const formData = {
  //     ...this.state.formData,
  //     [e.target.name]: e.target.value
  //   }


  //   this.setState({
  //     formData
  //   })
  // }

  // handleSubmit = async (e) => {
  //   e.preventDefault()

  //   try {
  //     console.log('About to post 🚀')
  //     const res = await registerUser(this.state.formData)

  //     console.log(res)

  //     // this.setState({
  //     //   redirect: '/login'
  //     // })
  //     return
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }


  render() {
    console.log('About to post 🚀')
    // const { username } = this.state.formData

    return (
      <>
        {/* <form onSubmit={this.handleSubmit}> */}
        <h1>HELLO WORLD</h1>
        {/* <form>
          <label>username</label>
          <br />
          <input
            placeholder="username"
            name="username"
            value={username}
            // onChange={this.handleChange}
          >
          </input>


          <button type="submit" >Register</button>

        </form> */}
      </>
      // <Form>
      //   <Form.Field>
      //     <label>First Name</label>
      //     <input placeholder='First Name'
      //       value={username}
      //       onChange={this.handleChange} />
      //   </Form.Field>
      //   <Form.Field>
      //     <label>Last Name</label>
      //     <input placeholder='Last Name' />
      //   </Form.Field>
      //   <Button type='submit'>Submit</Button>
      // </Form>
    )
  }


}


export default Register