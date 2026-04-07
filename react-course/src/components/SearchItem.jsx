const SearchItem = ({ searchQ = "", setSearch  }) => {
  return (
    <form>  
      <input
        type="text"
        placeholder="Search Item"
        value={searchQ}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchItem;