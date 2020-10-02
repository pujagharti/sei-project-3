import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Register from './Components/auth/Register'

const App = () => {
  return (
    
    
    <BrowserRouter >

  
      <Switch>

        <Route path='/front/register' component={Register} />


      </Switch>
    </BrowserRouter>


  )
}

export default App
