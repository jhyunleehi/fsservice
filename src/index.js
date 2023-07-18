import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider} from "react-router-dom";

import { AuthProvider } from "./components/hook/useJwt";
import 'bootstrap/dist/css/bootstrap.css';
import router from "./routes";
import { WebProvider } from "./components/hook/useWebsocket";




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WebProvider>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider> 
    </WebProvider>
  </React.StrictMode>
);
