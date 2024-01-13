import {
    createBrowserRouter,
  } from "react-router-dom";

import Main from "../components/Layouts/Main";

  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div> <Main/> </div>,
    },

  ]);


export default router;