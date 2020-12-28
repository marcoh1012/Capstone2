import  { composeWithDevTools} from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'

import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import { createStore, applyMiddleware } from "redux";

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = createStore(
  persistedReducer,
  composeWithDevTools(
    applyMiddleware(thunk),
  )
);

export const persistedStore = persistStore(store);