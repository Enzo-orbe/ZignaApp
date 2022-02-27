import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import ListPhonesReducer from "./reducers/ListPhonesReducer";

export default function configureStore() {
  const composeEnhancer =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const enhancer = composeEnhancer(applyMiddleware(thunk));

  const store = createStore(ListPhonesReducer, enhancer);

  store.subscribe(() => {
    store.getState();
  });

  return store;
}
