import React from 'react';
import {Auth} from './pages/auth';
import {Card} from './pages/card'
import {useSelector} from "react-redux";

const App = () => {
  const isAuth = useSelector(state => state.isAuth);
  return <div>
    <Auth />
  </div>
}

export default App;
