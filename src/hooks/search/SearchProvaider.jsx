import { createContext, useMemo, useState } from "react";

export const ThemeContext = createContext("search");

export const SearchProider = ({ children }) => {
  const [search, setSearch] = useState('');
  const value = useMemo(() => ({ search, setSearch }), [search]);
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
