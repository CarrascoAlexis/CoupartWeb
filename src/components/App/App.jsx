import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Header from "../Header/Header";

const router = createBrowserRouter([
{
    path: "/",
    element: <div>Hello world!</div>,
},
{
    path: "/compte",
    element: <p>account</p>
},
{
    path: "/connexion",
    element: <p>connect</p>
},
{
    path: "/contact",
    element: <p>contact</p>
},
{
    path: "*",
    element: <p>404</p>
}
]);



function App() {
    return(
        <div>
            <Header account={"coucou"}/>
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;