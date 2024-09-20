import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./defaultLayout";
import Home from "../module/home";
import Editorpage from "../module/Editorpage";
// import Aichatbox from "../module/Aichatbox";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/editorpage",
                element: <Editorpage />
            },
            // {
            //     path: "/aichatbox",
            //     element: <Aichatbox />
            // }
        ]
    }
])

export default router