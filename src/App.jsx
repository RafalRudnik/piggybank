import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import Home from "./ui/Home";
import Deposit from "./pages/Deposit";
import Withdraw from "./pages/Withdraw";
import Loan from "./pages/Loan";
import History from "./pages/History";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/deposit",
        element: <Deposit />,
      },
      {
        path: "/withdraw",
        element: <Withdraw />,
      },
      {
        path: "/loan",
        element: <Loan />,
      },
      {
        path: "/history",
        element: <History />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
