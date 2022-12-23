import React from "react";
import { ChildrenProp } from "../app.interface";

export const AppContext = React.createContext({
  navExpanded: false,
  openNav: () => {},
  closeNav: () => {},
});

export default function AppContextProvider(props: ChildrenProp) {
  const [navExpanded, setNavExpanded] = React.useState(false);

  const openNav = React.useCallback(() => {
    if (navExpanded) return;
    setNavExpanded(true);
  }, [navExpanded]);

  const closeNav = React.useCallback(() => {
    if (!navExpanded) return;
    setNavExpanded(false);
  }, [navExpanded]);

  return (
    <AppContext.Provider value={{ navExpanded, openNav, closeNav }}>
      {props.children}
    </AppContext.Provider>
  );
}
