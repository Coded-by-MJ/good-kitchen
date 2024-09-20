import { createContext, useCallback, useState, useContext } from "react";

const Context = createContext();

const GlobalProvider = ({ children }) => {
  const [active, setActive] = useState("all meals");

  const handleActive = useCallback((newActive) => {
    setActive(newActive);
  }, []);

  return (
    <Context.Provider
      value={{
        active,
        handleActive,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useData = () => useContext(Context);
export default GlobalProvider;
