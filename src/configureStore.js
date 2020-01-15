import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducers from "./reducers/rootReducers";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
const persistConfig = {
  key: "root",
  storage,
  whitelist: []
};
const isDev = process.env.NODE_ENV === "development";
const reducers = persistReducer(persistConfig, rootReducers);
const middlewares = [thunk];
if (isDev) middlewares.push(logger);

const store = createStore(
  reducers,
  undefined,
  compose(applyMiddleware(...middlewares))
);
const persistor = persistStore(store);

export { store, persistor };
