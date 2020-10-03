import React from 'react'
import { Button, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (

    <Menu>
      <Menu.Item>
        <Link to='/home'>
          <div className="ui vertical animated button" tabIndex="0">
            <div className="hidden content">Home</div>
            <div className="visible content">
              <i className="home icon"></i>
            </div>
          </div>
        </Link>
      </Menu.Item>

      <div className='ui container'></div>

      <Menu.Item>
        <Link to='/register'>
          <div className='ui animated button' tabIndex='0'>
            <div className='visible content'>
              <Button className='tiny ui button'>Register</Button>
            </div>
            <div className='hidden content'>
              <i className='right arrow icon'></i>
            </div>
          </div>
        </Link>
      </Menu.Item>



      <Menu.Item>
        <Link to='/login'>
          <div className='ui animated button' tabIndex='0'>
            <div className='visible content'>
              <Button className='tiny ui button'>Login</Button>
            </div>
            <div className='hidden content'>
              <i className='right arrow icon'></i>
            </div>
          </div>
        </Link>
      </Menu.Item>


    </Menu >
  )
}



export default Navbar