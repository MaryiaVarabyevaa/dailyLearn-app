import { LOGIN_ROUTE, REGISTRATION_ROUTE, WORD_ROUTE } from "./utils/consts";
import { Auth } from "./pages/auth/Auth";
import { Card } from "./pages/card/Card";

export const authRoutes = [
    {
        path: WORD_ROUTE,
        Component: Card
    }    
];

export const publicRoutes = [
    {
        path: LOGIN_ROUTE, 
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    }
]