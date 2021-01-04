import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './Components/common/Home'
import Register from './Components/auth/Register'
import Login from './Components/auth/Login'
import Features from './Components/locations/Features'
import Navbar from './Components/common/Navbar'
import About from './Components/common/About'
import Footer from './Components/common/Footer'
import LocationsIndex from './Components/locations/LocationsIndex'
import LocationShow from './Components/locations/LocationShow'
import LocalRegister from './Components/locals/LocalRegister'
import LocalProfile from './Components/locals/LocalProfile'

const App = () => {
  return (
    <>

      <BrowserRouter>
        <div className='page-container'>
          <Navbar />

          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/register' component={Register} />
            <Route path='/login' component={Login} />
            <Route path='/local-register' component={LocalRegister} />
            <Route path='/profile' component={LocalProfile} />
            <Route path='/about' component={About} />

            <Route path='/features/:feature' component={LocationsIndex} />

            <Route path='/features' component={Features} />

            <Route path='/locations/:id' component={LocationShow} />
          </Switch>
        </div>
        <Footer />

      </BrowserRouter>
    </>

  )
}

export default App
