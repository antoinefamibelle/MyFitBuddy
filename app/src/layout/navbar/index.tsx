import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { HomeIcon, User, Dumbbell, UtensilsCrossed } from "lucide-react";
import { useTheme } from "@/context/theme";
import { isDark } from "@/lib/utils";
import { NavbarIcon } from "./style";

export const Layout = () => {
  const isDesktop = window.innerWidth > 1024;
  const { theme } = useTheme();

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
        <div className="fixed h-12 left-0 bottom-0 w-screen">
          <div className="w-full flex flex-row justify-around align-center">
            <NavbarIcon theme={theme}>
              <HomeIcon color={isDark(theme) ? 'white' : 'black'} size={32} />
            </NavbarIcon>
            <Dumbbell color={isDark(theme) ? 'white' : 'black'} size={32} />
            <UtensilsCrossed color={isDark(theme) ? 'white' : 'black'} size={32} />
            <User color={isDark(theme) ? 'white' : 'black'} size={32} />
          </div>
        </div>  
      )}
    </div>
  );
}