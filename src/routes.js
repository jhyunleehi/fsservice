import App from "./App";
import ErrorPage from "./components/pages/ErrorPage";
import Home from "./components/pages/Dashboard/Home";
import SingleBuilding from "./components/pages/Dashboard/SingleBuilding";
import ContactPage from "./components/pages/Contact";
import LoginPage from "./components/auth/LoginPage";
import Settings from "./components/pages/Settings";
import Employees from "./components/pages/Employees/Employees";
import Employee from "./components/pages/Employees/Employee";
import { createBrowserRouter } from "react-router-dom";
import Buildings from "./components/pages/Buildings";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "/map/:id", element: <SingleBuilding /> },
      { path: "/employees", element: <Employees /> },
      { path: "/employees/:id", element: <Employee /> },
      { path: "/settings", element: <Settings /> },
      { path: "/buildings", element: <Buildings /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/login", element: <LoginPage /> },
    ],
  },
]);


export default router;