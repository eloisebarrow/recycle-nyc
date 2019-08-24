import React from 'react'
import { Route, Switch } from 'react-router-dom'

const Main = () => {
  return (
    <Switch>
      <Route path="/about"></Route>
      <Route path="/resources"></Route>
      <Route path="/by-borough"></Route>
      <Route path="/near-you"></Route>
      <Route path="/"></Route>
    </Switch>
  )
}

export default Main
