import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style.css';
import UserStore from './store/UserStore';
import CardStore from './store/CardStore';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context.Provider value={{
      user: new UserStore(),
      card: new CardStore()
    }}>
      <App />
    </Context.Provider>
  </React.StrictMode>
);
