import React from 'react'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import App from './components/app'
import configureStore from './store/index'

const Routes = () => (
  <Provider store={configureStore()}>
    <Router>
      <Route
        exact
        path="/"
        component={App} />
    </Router>
  </Provider>
)

export default Routes
