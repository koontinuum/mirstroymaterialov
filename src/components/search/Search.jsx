import searchIcon from "../../assets/headerIcons/searchIcon.svg";
import useSearch from '../../hooks/UseSearch';
import css from './search.module.scss'



const Search = () => {
  const {search, setSearch} = useSearch()
  return (
    <div className={css.searchEngine}>
      <button>
        <img src={searchIcon} alt="" />
      </button>
      <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Поиск продукции..." />
    </div>
  );
}

export default Search
