import React from "react";
import { render } from "react-dom";
import axios from "axios";
import App from './containers/App';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { store, persistor } from "./configureStore";
import './styles/reset.scss';
import './styles/helper.scss';
console.log(store.getState());
axios.defaults.baseURL = "https://www.googleapis.com/youtube/v3/";
render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    	<App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
