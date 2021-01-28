import React, { createContext, useReducer } from "react";

const initialState: any = { page: 'home' };
const store = createContext(initialState);
const { Provider } = store;

const StateProvider: React.FC<any> = ({ children }) => {
  const [state, dispatch] = useReducer((state: any, action: any) => {
    switch (action.page) {
      case "home":
        return { ...state, page: "home" };
      case "about":
        return { ...state, page: "about" };
      case "projects":
        return { ...state, page: "projects" };
      case "contact":
        return { ...state, page: "contact" };
      default:
        throw new Error();
    }
  }, initialState);
  return (
    <Provider value={{ state, dispatch }}>
      {children}
    </Provider>
  )
};

export { store, StateProvider }