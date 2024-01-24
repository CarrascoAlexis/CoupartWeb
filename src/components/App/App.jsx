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
    path: "/account",
    element: <p>Test</p>
},
{
    path: "/connect",
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
            <Header/>
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;