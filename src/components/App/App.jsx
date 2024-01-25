import {
    createBrowserRouter,
    RouterProvider,
    BrowserRouter as Router
} from "react-router-dom";

import Header from "../Header/Header";

const account="coucou"

const router = createBrowserRouter([
{
    path: "/",
    element: 
    <div>
        <Header account={account}/>
        <p>Hello world!</p>
    </div>,
},
{
    path: "/compte",
    element: 
    <div>
        <Header account={account}/>
        <p>compte</p>
    </div>
},
{
    path: "/connexion",
    element: 
    <div>
        <Header account={account}/>
        <p>connexion</p>
    </div>
},
{
    path: "/contact",
    element: 
    <div>
        <Header account={account}/>
        <p>contact</p>
    </div>
},
{
    path:"/services",
    element: 
    <div>
        <Header account={account}/>
        <p>services</p>
    </div>
},
{
    path: "*",
    element: <p>404</p>
}
]);



function App() {
    return(
        <div>
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;