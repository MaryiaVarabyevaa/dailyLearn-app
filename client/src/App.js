import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRouter} from './components/AppRouter';
import {BrowserRouter, RouterProvider} from "react-router-dom";
import {restoreFromStorageAction} from "./store/UserReducer";

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
    dispatch(restoreFromStorageAction());
    })
    return (
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    )
}

export default App;