import React from "react";
import AppContextProvider from "./context/app.context";
import AppRoutes from "./routes";

function App() {
  return (
    <AppContextProvider>
      <AppRoutes />
    </AppContextProvider>
  );
}

export default App;
