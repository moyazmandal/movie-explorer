import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/mainLayout";
import Home from "./pages/Home";
import Movies from "./pages/movies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [{
    path: "/",
    element: <Home/>,
  },
  {
    path: "/movies",
    element: <Movies/>,
  },

    ]
  }
  
]);


export default function Router() {
  return (
     <RouterProvider router={router} />
  )
}
