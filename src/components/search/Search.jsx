import searchIcon from "../../assets/headerIcons/searchIcon.svg";
import useSearch from "../../hooks/UseSearch";
import css from "./Search.module.scss";

const Search = () => {
  const { search, setSearch, openCard, setOpenCard } = useSearch();

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
    </div>
  );
};

export default Search;
