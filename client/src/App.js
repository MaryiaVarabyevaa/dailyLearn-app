import React from 'react';
import {useSelector} from "react-redux";
import {AppRouter} from './components/AppRouter';
import {BrowserRouter, RouterProvider} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    )
}

export default App;