import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk'
import { logger } from 'redux-logger';
import rootReducer from './root-reducer';

const middlewares = applyMiddleware(thunk, logger)
const store = createStore(rootReducer,middlewares);

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
