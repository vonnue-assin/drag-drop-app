import { useState } from "react";

import "./styles.css";

type Props = {
  onSearch: (query: string) => void;
};

const SearchBar = ({ onSearch }: Props) => {
  const [term, setTerm] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(term);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search Movies...."
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        className="search-icon"
      />
      <button type="submit" className="search">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
