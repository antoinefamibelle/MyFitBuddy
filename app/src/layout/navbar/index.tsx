import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { SearchIcon } from "lucide-react";
export const Layout = () => {
  const isDesktop = window.innerWidth > 1024;
    return (
      <div className="container">
        {/* A "layout route" is a good place to put markup you want to
            share across all the pages on your site, like navigation. */}
          {isDesktop && (
            <>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                </ul>
              </nav>
             <hr />
             </>
          )}
        {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
        <div className="container">
          <Outlet />
        </div>
        {!isDesktop && (
          <div className="fixed h-12 left-0 bottom-0 w-screen shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
            <div className="w-full flex flex-row justify-around align-center">
              <Link to="/about">About</Link>
              <SearchIcon size={32} />
              <Link to="/">Home</Link>
            </div>
          </div>  
        )}
      </div>
    );
  }