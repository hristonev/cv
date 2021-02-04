import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import defaultAPI from './apis/defaultAPI';
import errorMiddleware from './middleware/error';

const composeEnhancers = (process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const middlewares = [
  thunk.withExtraArgument({
    defaultAPI
  }),
  errorMiddleware
]

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middlewares))
)

export default store;
