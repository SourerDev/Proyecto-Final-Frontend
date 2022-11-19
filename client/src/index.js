import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import {store} from './redux/store/index'
import axios from "axios";
dotenv.config();
axios.defaults.baseURL = process.env.CLIENT_PF || "http://localhost:3001";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleOAuthProvider clientId="78341286584-ginpoaiq2llgaup3gkr9pg6spnoe7lfq.apps.googleusercontent.com">
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}> 
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
  </GoogleOAuthProvider>
);
