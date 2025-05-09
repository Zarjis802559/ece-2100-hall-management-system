import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import HomePage from "../pages/Home";
import Token from "../pages/Token";


  const router = createBrowserRouter([
    {
      path: "/",
      element:<App></App>,
      children:[
        {
            path:"/",
            element:<HomePage></HomePage>
        },
        {
            path:"/token",
            element:<Token></Token>
        },
      ]
    }
  ]);

  export default router;