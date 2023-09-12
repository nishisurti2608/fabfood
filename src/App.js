import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Error from "./components/Error/Error";
import RestraurantMenu from "./components/Restromenu/RestraurantMenu";

const Grocery = lazy(() => import("./components/Grocery/Grocery"));

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      {/** this outlet will be filled according to the children path */}
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestraurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
