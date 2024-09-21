import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./defaultLayout";
import Home from "../module/home";
import Editorpage from "../module/Editorpage";
import AdminPanel from "../module/adminpanel";

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
            {
                path: "/adminpanel",
                element: <AdminPanel />
            }
        ]
    }
])

export default router;
