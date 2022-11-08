import React from "react";
import {Routes, Route, Navigate} from 'react-router-dom';
import {CARD_ROUTE, LOGIN_ROUTE} from "../constants/routes";
import {useDispatch, useSelector} from "react-redux";
import {Card} from "../pages/card";
import {Auth} from "../pages/auth";

export const AppRouter = () => {
  const isAuth = useSelector(state => state.userReducer.isAuth);
  return <Routes>
    {
      isAuth && <Route path={CARD_ROUTE} element={<Card />}/>
    }
    <Route path={LOGIN_ROUTE} element={<Auth />}/>
    <Route path="*" element={<Navigate to={isAuth ? CARD_ROUTE : LOGIN_ROUTE} replace />} />
  </Routes>
};