import { createBrowserRouter } from "react-router";
import Home from "./pages/home/page";
import About from "./pages/about/page";

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "*",
    element: <div>Not Found</div>,
  },
]);

export default AppRoutes;
