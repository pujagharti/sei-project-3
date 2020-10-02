import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './Components/common/Home'
import Register from './Components/auth/Register'
import Login from './Components/auth/Login'
import Navbar from './Components/common/Navbar'

const App = () => {
  return (
    <>

      <BrowserRouter>
        <Navbar />


        <Switch>
          <Route exact path='/home' component={Home} />
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />

        </Switch>

      </BrowserRouter>
    </>

  )
}

export default App
