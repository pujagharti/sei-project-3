import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './Components/common/Home'
import Register from './Components/auth/Register'

const App = () => {
  return (
    <>
      <h1>HELLO WORLD</h1>

      <BrowserRouter>


        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/front/register' component={Register} />

        </Switch>

      </BrowserRouter>
    </>

  )
}

export default App
