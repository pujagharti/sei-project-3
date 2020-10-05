import React from 'react'
import { Button, Menu } from 'semantic-ui-react'
import { Link, withRouter } from 'react-router-dom'

import { isAuthenticated, logout } from '../../lib/auth'

class Navbar extends React.Component {

  state = {}

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  render() {
    const { activeItem } = this.state

    return (

      <Menu>
        <Menu.Item
          name='home'
          onClick={this.handleItemClick}
          as={Link}
          to='/home'
        >
          <div
            id={activeItem === 'home' ? 'active-nav-btn' : '' }
            className='ui vertical animated button'
            tabIndex="0">
            <div className="hidden content">Home</div>
            <div className="visible content">
              <i className="home icon"></i>
            </div>
          </div>
        </Menu.Item>

        <div className='ui container'></div>

        {!isAuthenticated() &&
          <Menu.Item
            as={Link}
            to='/register'
            name='register'
            onClick={this.handleItemClick}
          >
            <div 
              id={activeItem === 'register' ? 'active-nav-div' : '' }
              className='ui animated button'
              tabIndex='0'>
              <div className='visible content'>
                <Button
                  id={activeItem === 'register' ? 'active-nav-btn' : '' }
                  className='tiny ui button'
                  name='register'
                  onClick={this.handleItemClick}
                >
                  Register
                </Button>
              </div>
              <div className='hidden content'>
                <i className='right arrow icon'></i>
              </div>
            </div>
          </Menu.Item>
        }

        <Menu.Item
          name='local-register'
          onClick={this.handleItemClick}
          as={Link}
          to='/local-register'
        >
          <div
            id={activeItem === 'local-register' ? 'active-nav-div' : '' }
            className='ui animated button'
            tabIndex='0'
          >
            <div className='visible content'>
              <Button 
                id={activeItem === 'local-register' ? 'active-nav-btn' : '' }
                className='tiny ui button'
              >
                Contribute
              </Button>
            </div>
            <div className='hidden content'>
              <i className='right arrow icon'></i>
            </div>
          </div>
        </Menu.Item>

        {isAuthenticated() &&
          <Menu.Item
            name='home'
            onClick={this.handleItemClick}
            as={Link}
            to='/home'
          >
            <div 
              className='ui animated button'
              tabIndex='0'
            >
              <div className='visible content'>
                <Button onClick={logout} className='tiny ui button'>Logout</Button>
              </div>
              <div className='hidden content'>
                <i className='right arrow icon'></i>
              </div>
            </div>
          </Menu.Item>
        }


        {!isAuthenticated() &&
          <Menu.Item
            name='login'
            onClick={this.handleItemClick}
            as={Link}
            to='/login'
          >
            <div
              id={activeItem === 'login' ? 'active-nav-div' : '' }
              className='ui animated button' tabIndex='0'>
              <div className='visible content'>
                <Button
                  id={activeItem === 'login' ? 'active-nav-btn' : '' }
                  className='tiny ui button'>Login</Button>
              </div>
              <div className='hidden content'>
                <i className='right arrow icon'></i>
              </div>
            </div>
          </Menu.Item>
        }


      </Menu >
    )

  }

}



export default withRouter(Navbar)