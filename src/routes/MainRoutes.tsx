import { Outlet } from "react-router-dom";
import MainLayout from "../layouts/MainLayout"
import config from "../config";
import Home from "../pages/Home";

const MainRouter = () => {
    return <MainLayout/>;
}

const CustomerRouter = () => {
    return <Outlet/>
}

const publicRoutes = {
    children: [
        { path: config.routes.public.home, element: <Home/> }
    ]
}

const MainRoutes = {
    path: '/',
    element: <MainRouter/>,
    children: [publicRoutes]
};

export default MainRoutes;