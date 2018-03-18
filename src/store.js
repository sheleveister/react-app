import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';

function _applyMiddleware() {
  const middleWare = [

  ];

  return applyMiddleware(...middleWare);
}

export default function configureStore(initialState) {
  const store = compose(
    _applyMiddleware()
  )(createStore)(rootReducer, initialState);

  return store;
}
