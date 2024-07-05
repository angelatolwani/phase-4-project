import App from "./components/App"
import Home from "./components/Home"
import Form from "./components/Form"
import SellersList from "./components/SellersList"
import SellerDetails from "./components/SellerDetails"

const routes = [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/form",
          element: <Form />,
        },
        {
          path: "/sellers",
          element: <SellersList />,
        },
        {
          path: "/sellers/:id",
          element: <SellerDetails />,
        },
      ],
    },
  ];
  
  export default routes;