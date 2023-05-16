import { createBrowserRouter, Outlet } from "react-router-dom";
import { lazy, Suspense } from "react";
import Home from "../pages/home";

const lazyElement = (
  lazyChildren: () => Promise<{
    default: React.ComponentType<any>;
  }>
) => {
  const Element = lazy(lazyChildren);
  return (
    <Suspense fallback={<>loading...</>}>
      <Element />
    </Suspense>
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: lazyElement(() => import("../pages/about")),
      },
    ],
  },
]);
