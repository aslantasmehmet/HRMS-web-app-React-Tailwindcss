import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import { Provider } from "react-redux";
import {saveState} from "./localStorage"
import {configureStore} from "./store/configureStore"

const store =configureStore();
store.subscribe(() =>{
  saveState({
    auth: store.getState().auth,
  })
})


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ToastProvider>
        <App />
      </ToastProvider>
    </BrowserRouter>
  </Provider>
);

reportWebVitals();
