import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import {createStore} from 'redux';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {Provider} from "react-redux";
import {RouterProvider} from "react-router-dom";
import {publicRoutes} from "./routes";
import {userStore} from "./store/UserStore";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={userStore}>
     <RouterProvider router={publicRoutes}/>
    </Provider>
  </React.StrictMode>
);
