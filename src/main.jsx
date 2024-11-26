import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/login.jsx";
import RegisterPage from "./pages/register.jsx";
import Errorpage from "./Notfound.jsx";

// Konfigurasi router menggunakan createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Errorpage />, // Halaman error untuk route ini
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

// Render aplikasi dengan RouterProvider
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
