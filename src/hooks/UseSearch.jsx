import { useContext } from "react";
import { ThemeContext } from "./search/SearchProvaider";


const useSearch = () => {
  const value = useContext(ThemeContext);
  return value;
};

export default useSearch;
