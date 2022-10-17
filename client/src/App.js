import { observer } from 'mobx-react-lite';
import React, { useContext, useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import {AppRouter} from './components/AppRouter';
import {Context} from './index';
import {check} from './http/userAPI';

const App = observer(() => {
  // const {user} = useContext(Context);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     check().then(data => {
  //       user.setUser(true);
  //       user.setIsAuth(true);
  //     }).finally(() => setLoading(false))
  //   }, [])
  //   }, 1000)
    
  // if(loading) {
  //   return' Loading...'
  // }
  return <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
})

export default App;
