import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers/index'

export default function configureStore() {
  console.log('Initializing Store')
  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk),
  )

  return store
}
