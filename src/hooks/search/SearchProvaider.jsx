import { createContext, useMemo, useState } from "react";

export const SearchContext = createContext({ search: "", openCard: false });

export const SearchProider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [openCard, setOpenCard] = useState(false);
  const value = useMemo(
    () => ({ search, setSearch, openCard, setOpenCard }),
    [search, openCard]
  );

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};
