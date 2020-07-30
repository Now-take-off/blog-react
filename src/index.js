import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import { minRoutes } from './routers'
// 导入字体图标库
// import './assets/fonts/iconfont.css'
import './index.css'
import App from './App'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/home" render={(routeProps) => <App {...routeProps} />} />
        {minRoutes.map((route) => {
          return <Route key={route.path} {...route} />
        })}
        ;
        <Redirect to="/404" />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
)
