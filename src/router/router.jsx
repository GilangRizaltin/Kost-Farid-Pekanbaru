import Home from "../pages/Landing_Pages/Home";
import Login from "../pages/Administration/Login";

const routes = [
    {
        path: "/",
        element: (
                <Home />
        ),
        layout: "landing",
    },
];

export {routes}