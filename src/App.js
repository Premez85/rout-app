import {createBrowserRouter, RouterProvider} from "react-router-dom";

import Root from "./pages/Root";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ErrorPage from "./pages/Error";
import ProductDetail from "./pages/ProductDetail";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
      { index: true, element: <Home/> },
      {path: 'products', element: <Products/>},
      {path: 'products/:productId', element:<ProductDetail/>}
    ],
  },
])

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
