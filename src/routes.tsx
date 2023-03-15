import { createBrowserRouter } from "react-router-dom";
import NotFound from "./404";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<>hello World</>,
        errorElement: <NotFound />
    },
])