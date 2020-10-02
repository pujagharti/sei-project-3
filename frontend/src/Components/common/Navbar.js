import React from 'react'
import { Button, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
    <Menu>
      <Menu.Item>
        <Link to='/home'>
          Home
        </Link>
      </Menu.Item>

      <Menu.Item>
        <Link to='/register'>
          <Button primary>Register</Button>
        </Link>
      </Menu.Item>

      <Menu.Item>
        <Link to='/login'>
          <Button>Log-in</Button>
        </Link>
      </Menu.Item>


    </Menu >
  )





}



export default Navbar