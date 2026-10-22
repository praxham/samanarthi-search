import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router";

const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryFromURL = searchParams.get("query") || "";
  const [query, setQuery] = useState(queryFromURL);
  const navigate = useNavigate();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSearchParams({ query });
      }}
      className="self-center w-full mt-16 flex flex-col gap-2 @container"
    >
      <h1
        onClick={() => {
          navigate("/");
          setSearchParams({});
          setQuery("");
        }}
        className="font-semibold text-[17cqw] text-center leading-40 cursor-pointer"
      >
        Samanarthi
      </h1>
      <p className="font-medium italic text-black/70 text-center text-lg sm:text-2xl">
        Search the unserarchable
      </p>
      <label htmlFor=""></label>
      <div className="flex flex-row gap-2">
        {" "}
        <input
          className="w-full px-4 py-2 rounded-(--corner-radius) border-(--clr-grey-two) border bg-white"
          id="query"
          name="query"
          type="text"
          required
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="styled-button">Search</button>
      </div>
    </form>
  );
};

export default SearchBar;
