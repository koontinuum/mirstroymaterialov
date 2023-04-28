import { useDispatch, useSelector } from "react-redux";
import searchIcon from "../../assets/headerIcons/searchIcon.svg";
import css from './search.module.scss'
import {setSearch, setOpen} from '../../redux/slices/SearchSLice'

const Search = () => {


 const dispatch = useDispatch()
const search = useSelector((state) => state.search.value);
const open = useSelector((state) => state.search.open);

  const handleKeyDown = (event) => {
    
     if (event.key === "Enter") {
      open(!open);
    }
  };

  return (
    <div className={css.searchEngine}>
      <input
        className={css.searchInp}
        type="search"
        value={search}
        onChange={(e) => dispatch(setSearch(e.target.value))}
        onKeyDown={handleKeyDown}
        placeholder="Поиск продукции..."
      />
      <button type="sumbit" onClick={() => dispatch(setOpen())}>
        <img src={searchIcon} alt="" />
      </button>
     
    </div>
  );
};

export default Search;
