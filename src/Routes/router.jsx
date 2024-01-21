import { createBrowserRouter } from "react-router-dom";

import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Contact from "../pages/Shared/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
