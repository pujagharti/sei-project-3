import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './Components/common/Home'
import Register from './Components/auth/Register'
import Login from './Components/auth/Login'
import Features from './Components/locations/Features'
import Navbar from './Components/common/Navbar'
import LocationsIndex from './Components/locations/LocationsIndex'
import LocationShow from './Components/locations/LocationShow'

const App = () => {
  return (
    <>

      <BrowserRouter>
        <Navbar />


        <Switch>
          <Route exact path='/home' component={Home} />


          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />

          <Route path='/features' component={Features} />

          <Route
            path='/locations/glamping'
            render={(props) => (
              < LocationsIndex {...props} feature={'glamping'} />
            )}
          />

          <Route path='/locations/:id' component={LocationShow} />


        </Switch>

      </BrowserRouter>
    </>

  )
}

export default App
