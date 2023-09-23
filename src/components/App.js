import React, { useRef } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Link,
  Outlet,
} from "react-router-dom";
import Signin from "./Singin";
import OtpScreen from "./OtpScreen";

function App() {
  const inputRef = useRef(null);

  const CreateRouter = createBrowserRouter([
    {
      path: "/",
      element: <Signin />,
    },
    {
      path: "/otp",
      element: <OtpScreen />,
    },
  ]);

  return (
    <>
      <RouterProvider router={CreateRouter} />
    </>
  );
}

export default App;
