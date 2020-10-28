import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { leadersReducer } from './leadersReducer';
import { commentsReducer } from './commentsReducer';
import { dishesReducer } from './dishesReducer';
import {promotionsReducer} from './promotionsReducer';
export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({ leadersReducer, commentsReducer, dishesReducer, promotionsReducer }),
    applyMiddleware(thunk, logger)
  );
  return store;
};