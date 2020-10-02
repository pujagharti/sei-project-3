import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './Components/common/Home'
import Register from './Components/auth/Register'

const App = () => {
  return (
    <>

      <BrowserRouter>


        <Switch>
          <Route exact path='/home' component={Home} />
          <Route path='/register' component={Register} />
        </Switch>

      </BrowserRouter>
    </>

  )
}

export default App
