import React from "react";
import { AppContext } from "../context/app.context";

export default function useNav() {
  return React.useContext(AppContext);
}
