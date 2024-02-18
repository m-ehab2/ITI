export default function Filter(props) {
  const {
    categories,
    selectedCategory,
    handleSelectCategory,
    handleSearch,
    search,
  } = props;

  const handleChange = (e) => {
    handleSearch(e.target.value);
  };

  return (
    <div className="flex items-center gap-8 my-5">
      <div>
        <input
          type="text"
          placeholder="search"
          className="p-2 rounded-md border-2 border-orange-500 outline-none"
          value={search}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => {
          return (
            <div
              key={cat.id}
              onClick={() => handleSelectCategory(cat.id)}
              className={` text-xl border-2 border-orange-500 rounded-full py-1 px-3 cursor-pointer hover:bg-orange-500 hover:text-white transition duration-300 ${
                cat.id === selectedCategory
                  ? "bg-orange-500 text-white"
                  : " bg-white text-orange-500 "
              } `}
            >
              {cat.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}
