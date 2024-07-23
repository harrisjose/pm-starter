/* eslint-disable @typescript-eslint/no-explicit-any */
import { Outlet, useRoutes } from "react-router-dom";
import pages from "~react-pages";

const Layout = () => {
  return (
    <div className="p-2 mx-auto prose lg:prose-lg prose-slate dark:prose-invert prose-code:before:content-none prose-code:after:content-none">
      <Outlet></Outlet>
    </div>
  );
};

const App = () => {
  return (
    <div className="h-full w-full mt-12 mb-10">
      {useRoutes([
        {
          path: "/",
          element: <Layout />,
          children: pages,
        },
      ])}
    </div>
  );
};

export default App;
