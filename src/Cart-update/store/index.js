import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import middlewares from '../utils/middlewares';

const configureStore = () => {
  return createStore(
    rootReducer,
    middlewares
  );
};
export default configureStore;