import { createBrowserRouter } from "react-router-dom";
import { Error } from "./components";
import { Conversation, Signin, Signup, Welcome } from "./module";
import { conversationUrl, homeUrl, signinUrl, signupUrl } from "./urls";
import { Layout } from "./components/layout/Layout";




export const routerConfig = createBrowserRouter([
    {
        path: homeUrl,
        element: <Layout />,
        children: [
            {
                path: conversationUrl,
                errorElement: <Error />,
                element: <Conversation />
            },
        ]
    },
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