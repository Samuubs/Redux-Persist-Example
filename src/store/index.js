import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer, persistCombineReducers } from "redux-persist";
// import storage from 'redux-persist/es/storage';
import AsyncStorage from '@react-native-community/async-storage';

import rootReducer from '../reducers'
import rootSaga from '../sagas/index';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    persistedReducer,
    undefined,
    compose(
      applyMiddleware(sagaMiddleware)
    )
)
sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { store, persistor };
