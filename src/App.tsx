import React from "react";
import AppContextProvider from "./context/app.context";
import AppRoutes from "./routes";

export default function App() {
  return (
    <AppContextProvider>
      <AppRoutes />
    </AppContextProvider>
  );
}
