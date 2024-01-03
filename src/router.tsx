import { createBrowserRouter } from "react-router-dom";
import { Error } from "./components";
import { Signin, Signup, Welcome } from "./module";
import { signinUrl, signupUrl } from "./urls";




export const routerConfig = createBrowserRouter([
    {
        path: "/",
        errorElement: <Error />,
        element: <Welcome />,
    },
    {
        path: signupUrl,
        errorElement: <Error />,
        element: <Signup />
    },
    {
        path: signinUrl,
        errorElement: <Error />,
        element: <Signin />
    }
])