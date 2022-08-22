import logger from 'redux-logger';
import createSagaMiddleware from '@redux-saga/core';
import {configureStore} from '@reduxjs/toolkit';
import rootSaga from './rootsaga';
import {rootReducer} from './rootReducer';

const sagaMiddleware = createSagaMiddleware({});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware, logger],
});
sagaMiddleware.run(rootSaga);
