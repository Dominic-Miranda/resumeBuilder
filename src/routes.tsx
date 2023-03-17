import { createBrowserRouter } from "react-router-dom";
import NotFound from "./404";
import Home from "./pages/home";
import Personal from './components/form/personal';
import Education from "./components/form/education";
import Experience from "./components/form/experience";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Home />,
        errorElement: <NotFound />,
    },
    {
        path: '/form',
        element: <Personal />,
    },
    {
        path:"/education",
        element: <Education />
    },
    {
        path:"/experience",
        element:<Experience />
    }
])