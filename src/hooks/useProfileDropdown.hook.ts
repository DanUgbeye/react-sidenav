import React from "react";
import { AppContext } from "../context/app.context";

export default function useProfileDropdown() {
  const { profileDropdownExpanded, openProfileDropdown, closeProfileDropdown } =
    React.useContext(AppContext);
  return { profileDropdownExpanded, openProfileDropdown, closeProfileDropdown };
}
