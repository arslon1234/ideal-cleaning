import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
  } from "react-router-dom";
  import App from "../App";
  import {Dashboard, MainLayout, Orders, SignIn, SignUp} from "@pages";
  
  const index = () => {
    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<App />}>
          <Route index element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/main/*" element={<MainLayout/>}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          </Route>
        </Route>
      )
    );
    return <RouterProvider router={router} />;
  };
  
  export default index;
  