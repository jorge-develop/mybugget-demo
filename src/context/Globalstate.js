import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//initial state::
const initialState = {
  transactions: [],
};

// create context
export const GlobalContext = createContext(initialState);
// Create a provider component to wrap your app
export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
