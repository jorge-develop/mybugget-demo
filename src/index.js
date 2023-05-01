import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { GlobalContextProvider } from "./context/Globalstate";
const AppContainer = () => {
  return (
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppContainer />);
