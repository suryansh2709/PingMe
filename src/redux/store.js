import logger from 'redux-logger';
import createSagaMiddleware from '@redux-saga/core';
import {configureStore} from '@reduxjs/toolkit';
import rootSaga from './rootsaga';
import {rootReducer} from './rootReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';

const sagaMiddleware = createSagaMiddleware({});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['userDataReducer'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [sagaMiddleware, logger],
});
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
