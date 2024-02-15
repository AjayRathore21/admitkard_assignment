import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signin from "./Singin";
import OtpScreen from "./OtpScreen";

function App() {
  const [state, setState] = useState({ phoneNumber: "", otp: null });
  const CreateRouter = createBrowserRouter([
    {
      path: "/",
      element: <Signin state={state} setState={setState} />,
    },
    {
      path: "/otp",
      element: <OtpScreen setState={setState} state={state} />,
    },
  ]);

  return (
    <>
      <RouterProvider router={CreateRouter} />
    </>
  );
}

export default App;
