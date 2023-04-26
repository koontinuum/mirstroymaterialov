import searchIcon from "../../assets/headerIcons/searchIcon.svg";
import useSearch from "../../hooks/UseSearch";
import css from "./Search.module.scss";

const Search = () => {
  const { search, setSearch, openCard, setOpenCard } = useSearch();

  return (
    <div className={css.searchEngine}>
      <button>
        <img src={searchIcon} alt="" />
      </button>
      <input
        className={css.searchInp}
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Поиск продукции..."
      />
      <input
        type="submit"
        value="Пойск"
        onClick={() => setOpenCard(!openCard)}
      />
    </div>
  );
};

export default Search;
