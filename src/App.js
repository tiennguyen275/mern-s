import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddUser from "./addUser/AddUser";
import User from "./getUser/User";
import "./App.css";
function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <User />,
    },
    {
      path: "/add",
      element: <AddUser />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
