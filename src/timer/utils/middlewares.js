import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from './logger.middleware';
import errorHandler from './error.middleware';

const middlewares = applyMiddleware(logger, errorHandler, thunk);

export default middlewares;
