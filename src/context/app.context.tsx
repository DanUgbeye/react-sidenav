import React, { PropsWithChildren } from "react";

export const AppContext = React.createContext({
  darkMode: false,
  toggleDarkMode: () => {},

  navExpanded: false,
  openNav: () => {},
  closeNav: () => {},

  profileDropdownExpanded: false,
  openProfileDropdown: () => {},
  closeProfileDropdown: () => {},
});

export interface AppContextProviderProps extends PropsWithChildren {}

export default function AppContextProvider(props: AppContextProviderProps) {

  // dark mode state and methods
  const [darkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = React.useCallback(() => {
    setDarkMode((prev) => !prev);
  }, []);

  // sidenav state and methods
  const [navExpanded, setNavExpanded] = React.useState(false);

  const openNav = React.useCallback(() => {
    if (navExpanded) return;
    setNavExpanded(true);
  }, [navExpanded]);

  const closeNav = React.useCallback(() => {
    if (!navExpanded) return;
    setNavExpanded(false);
  }, [navExpanded]);

  // profile dropdown state and methods
  const [profileDropdownExpanded, setProfileDropdownExpanded] =
    React.useState(false);

  const openProfileDropdown = React.useCallback(() => {
    if (profileDropdownExpanded) return;
    setProfileDropdownExpanded(true);
  }, [profileDropdownExpanded]);

  const closeProfileDropdown = React.useCallback(() => {
    if (!profileDropdownExpanded) return;
    setProfileDropdownExpanded(false);
  }, [profileDropdownExpanded]);

  return (
    <AppContext.Provider
      value={{
        darkMode,
        toggleDarkMode,

        navExpanded,
        openNav,
        closeNav,

        profileDropdownExpanded,
        openProfileDropdown,
        closeProfileDropdown,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
