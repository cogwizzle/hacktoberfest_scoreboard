// @flow
import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import UsersReducer, { defaultState } from './reducers/users.reducer';


type ReduxStore = {
  subscribe: Function,
  getState: Function
};

const store: ReduxStore = compose(
  applyMiddleware(thunk),
)(createStore)(
  UsersReducer,
  defaultState,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);


type Props = {
  children: React.Node;
};

export default ({ children }: Props) => (
  <Provider store={store}>
    {children}
  </Provider>
);
