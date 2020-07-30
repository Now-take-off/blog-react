import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { adminRoutes } from './routers'
import './App.css'
function App() {
  return (
    <Switch>
      {adminRoutes.map((route) => {
        return (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            render={(routeProps) => {
              return <route.component {...routeProps} />
            }}
          />
        )
      })}
    </Switch>
  )
}

export default App
