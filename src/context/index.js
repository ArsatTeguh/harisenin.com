import { createContext, useContext } from "react";
import React, { useReducer } from "react";


export const AppContext = createContext({});


export function useStore() {
  return useContext(AppContext);
}

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_USERS":
      return { ...state, users: [...state.users , action.payload] };
    default:
      throw new Error("invalid token");
  }
};

const initialState = {
  users: [],
};

// pusat data
export const DataContext = ({ children }) => {
  const [state, dispacth] = useReducer(reducer, initialState);

  const addUser = ({ type, users }) => {
    dispacth({
      type: type,
      payload: users,
    });
  };

 

  const initialValue = [state, addUser];

  return (
    <AppContext.Provider value={initialValue}>{children}</AppContext.Provider>
  );
};
