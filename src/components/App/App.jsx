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
    path: "/test",
    element: <p>Test</p>
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