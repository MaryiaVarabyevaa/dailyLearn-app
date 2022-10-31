import {LOGIN_ROUTE, CARD_ROUTE} from "./utils/consts";
import {Card} from "./pages/card";
import {Auth} from "./pages/auth";
import {createBrowserRouter} from "react-router-dom";

export const authRoutes = createBrowserRouter([
  {
    path: CARD_ROUTE,
    element: <Card />,
  },
]);

export const publicRoutes = createBrowserRouter([
  {
    path: LOGIN_ROUTE,
    element: <Auth />,
  },
  {
    path: CARD_ROUTE,
    element: <Card />,
  },
]);