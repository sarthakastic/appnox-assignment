import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Search from "./routes/Search.tsx";
import Results from "./routes/Results.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>404 not found go back to home</div>,
  },
  {
    path: "/search",
    element: <Search />,
    errorElement: <div>404 not found go back to home</div>,
  },
  {
    path: "/results",
    element: <Results />,
    errorElement: <div>404 not found go back to home</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
