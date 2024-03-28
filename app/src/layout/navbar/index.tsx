import { Outlet } from "react-router-dom";

export const Layout = () => {
    return (
      <div>
        {/* A "layout route" is a good place to put markup you want to
            share across all the pages on your site, like navigation. */}
        <nav>
          <h1>Ceci est la navbar</h1>
        </nav>
        <hr />
        {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
        <div className="container">
          <Outlet />
        </div>
      </div>
    );
  }