import { createBrowserRouter } from "react-router-dom";
import MainContainer from "../pages/main/MainContainer";

const router = createBrowserRouter([
    {path:"",element:<MainContainer/>},
])

export default router;