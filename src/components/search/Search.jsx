import { useDispatch, useSelector } from "react-redux";
import searchIcon from "../../assets/headerIcons/searchIcon.svg";
import useSearch from '../../hooks/UseSearch';
import css from './search.module.scss'
import {setSearch} from '../../redux/slices/SearchSLice'
import css from "./Search.module.scss";

const Search = () => {
  const { openCard, setOpenCard } = useSearch();


 const dispatch = useDispatch()
const search = useSelector((state) => state.search.value);
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setOpenCard(!openCard);
    }
  };

  return (
    <div className={css.searchEngine}>
      <input
        className={css.searchInp}
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Поиск продукции..."
      />
      {/* <input type="submit" value="" onClick={() => setOpenCard(!openCard)} /> */}
      <button type="sumbit" onClick={() => setOpenCard(!openCard)}>
        <img src={searchIcon} alt="" />
      </button>
      <input
        type="search"
        value={search}
        onChange={(e) => dispatch(setSearch(e.target.value))}
        placeholder="Поиск продукции..."
      />
      <input type="submit" onClick={() => setOpenCard(!openCard)} />

    </div>
  );
};

export default Search;
