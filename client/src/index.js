//React Stuff
import React from 'react';
import ReactDOM from 'react-dom';

//Redux Stuff
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import ReduxPromise from 'redux-promise';
import ReduxThunk from 'redux-thunk';

//React Router
import { BrowserRouter, Route, Link } from 'react-router-dom'

//Reducers
import reducers from './reducers';

//Create the store, with Promise middleware.
const createStoreWithMiddleware = applyMiddleware(ReduxPromise, ReduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

//Components
import App from './components/App'

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <Route path="/" component={App}>
    </Route>
  </BrowserRouter>


   
  </Provider>,
  document.getElementById('app')
)