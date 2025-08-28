import { createBrowserRouter } from "react-router";
import Home from "./pages/home/page";
import About from "./pages/about/page";
import Project from "./pages/project/page";

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/project",
    element: <Project />,
  },
  {
    path: "*",
    element: <div>Not Found</div>,
  },
]);

export default AppRoutes;
