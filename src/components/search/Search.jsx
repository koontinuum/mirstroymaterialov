import searchIcon from "../../assets/headerIcons/searchIcon.svg";
import useSearch from '../../hooks/UseSearch';
import css from './search.module.scss'



const Search = () => {
  const { search, setSearch, openCard, setOpenCard } = useSearch();

  console.log(openCard)
  return (
    <div className={css.searchEngine}>
      <button>
        <img src={searchIcon} alt="" />
      </button>
      <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Поиск продукции..." />
      <input type="submit" onClick={()=> setOpenCard(!openCard)} />
    </div>
  );
}

export default Search
