import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import {store} from './redux/store/index';
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 
  <React.StrictMode>
    
    <BrowserRouter>
      <Provider store={store}> 
      <Auth0Provider
    domain="dev-6lgbhs7b72k04mtv.us.auth0.com"
    clientId="kzfYJItcxLGxim5GRUDo7O1B3WNT96Fg"
    redirectUri={window.location.origin}
  >
        <App />
        
        </Auth0Provider>
      </Provider>
    </BrowserRouter>
    
  </React.StrictMode>
  
);
