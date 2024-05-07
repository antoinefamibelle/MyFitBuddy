import { Outlet } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import { HomeIcon, User, Dumbbell, UtensilsCrossed } from "lucide-react";
import { useTheme } from "@/context/theme";
import { isDark } from "@/lib/utils";
import { NavbarIcon } from "./style";

export const Layout = () => {
  const isDesktop = window.innerWidth > 1024;
  const location = useLocation();
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
        <div className="fixed h-12 left-0 bottom-0 w-screen items-center justify-center">
          <div className="flex w-full px-8 flex-row content-center justify-around">
              <NavbarIcon theme={theme} isSelected={location.pathname === '/'}>
                <Link to="/">
                <HomeIcon
                  color={
                    location.pathname === '/' ? (isDark(theme) ? 'black' : 'white') : (isDark(theme) ? 'white' : 'black')
                  }
                  size={24}
                />
                </Link>
              </NavbarIcon>
              <NavbarIcon theme={theme} isSelected={location.pathname === '/about'}>
                <Link to="/about">
                  <Dumbbell
                    color={
                      location.pathname === '/about' ? (isDark(theme) ? 'black' : 'white') : (isDark(theme) ? 'white' : 'black')
                    }
                    size={24}
                  />
                </Link>
              </NavbarIcon>
              <NavbarIcon theme={theme} isSelected={location.pathname === '/contact'}>
                <Link to="/contact">
                  <UtensilsCrossed
                    color={
                      location.pathname === '/contact' ? (isDark(theme) ? 'black' : 'white') : (isDark(theme) ? 'white' : 'black')
                    }
                    size={24}
                  />
                </Link>
              </NavbarIcon>
              <NavbarIcon theme={theme} isSelected={location.pathname === '/profile'}>
                <Link to="/profile">
                  <User
                    color={
                      location.pathname === '/profile' ? (isDark(theme) ? 'black' : 'white') : (isDark(theme) ? 'white' : 'black')
                    }
                    size={24}
                  />
                </Link>
              </NavbarIcon>
          </div>
        </div>  
      )}
    </div>
  );
}