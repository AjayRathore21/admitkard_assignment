import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signin from "./Singin";
import OtpScreen from "./OtpScreen";

function App() {
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
