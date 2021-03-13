import { applyMiddleware, combineReducers, createStore, ReducersMapObject } from "redux";
import createSagaMiddleware from "redux-saga";

import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';

import { createLogger } from "redux-logger";
import { rootSaga, userReducer } from "../adapters/redux";


const rootReducerConfig: any = { user: userReducer }


const rootReducer = persistCombineReducers({
  key: 'root',
  storage,
}, rootReducerConfig);


export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [];

  middleware.push(sagaMiddleware);
  if (process.env.NODE_ENV !== "production") {
    middleware.push(createLogger());
  }

  const store = createStore(
    rootReducer,
    applyMiddleware(...middleware),
  );

  let persistor = persistStore(store);

  sagaMiddleware.run(rootSaga);
  return { store, persistor };
};
