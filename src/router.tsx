import { createBrowserRouter } from "react-router-dom";
import { Error } from "./components";
import { Conversation, LayoutNoneChoose, Message, Signin, Signup, Welcome } from "./module";
import { conversationIdUrl, conversationUrl, homeUrl, signinUrl, signupUrl } from "./urls";
import { Layout } from "./components/layout/Layout";




export const routerConfig = createBrowserRouter([
    {
        path: homeUrl,
        element: <Layout />,
        children: [
            {
                path: conversationUrl,
                element: <Conversation />,
                children: [
                    {
                        path: conversationUrl,
                        errorElement: <Error />,
                        element: <LayoutNoneChoose />,
                    },
                    {
                        path: conversationIdUrl,
                        errorElement: <Error />,
                        element: <Message />,
                    },
                ]
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