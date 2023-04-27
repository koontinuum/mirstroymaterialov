import { useDispatch, useSelector } from "react-redux";
import searchIcon from "../../assets/headerIcons/searchIcon.svg";
import useSearch from '../../hooks/UseSearch';
import css from './search.module.scss'
import {setSearch} from '../../redux/slices/SearchSLice'


const Search = () => {
  const { openCard, setOpenCard } = useSearch();

 const dispatch = useDispatch()
const search = useSelector((state) => state.search.value);
//console.log(useSelector());
console.log(search);
  return (
    <div className={css.searchEngine}>
      <button>
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
}

export default Search
