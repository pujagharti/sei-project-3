import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './Components/common/Home'
import Register from './Components/auth/Register'
import Login from './Components/auth/Login'
import Features from './Components/locations/Features'

const App = () => {
  return (
    <>

      <BrowserRouter>


        <Switch>
          <Route exact path='/home' component={Home} />
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />

          <Route path='/features' component={Features} />

        </Switch>

      </BrowserRouter>
    </>

  )
}

export default App
