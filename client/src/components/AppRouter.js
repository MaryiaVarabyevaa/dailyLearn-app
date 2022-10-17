import React, {useContext} from 'react'
import {Routes, Route} from 'react-router-dom';
import {authRoutes, publicRoutes} from '../routes';
import { Card } from '../pages/card/Card';
import { Context } from '../index';

export const AppRouter = () => {
  const {user} = useContext(Context);
  return (
    <Routes>
      {
        user.isAuth && authRoutes.map(({path, Component}) => {
            return <Route key={path} path={path} element={<Component/>} exact/>
          })
      }
      {
        publicRoutes.map(({path, Component}) => {
            return <Route key={path} path={path} element={<Component/>} exact/>
          })
      }
      <Route path="*" element={<Card/>}/>
    </Routes>
  )
}
