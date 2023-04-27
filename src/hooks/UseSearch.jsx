import { useContext } from "react";
import { SearchContext } from "./search/SearchProvaider";

const useSearch = () => {
  const value = useContext(SearchContext);
  return value;
};

export default useSearch;
