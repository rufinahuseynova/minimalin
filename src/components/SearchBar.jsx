import { useState } from 'react';
import '../css/SearchBar.css';
import { IoMdClose } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <div className="search-bar-container">
      <button onClick={toggleSearch} className="search-icon-button">
        {isSearchOpen ? <IoMdClose className='ic' /> : <IoSearch className='ic' />}
      </button>
      {isSearchOpen && (
        <input
          type="text"
          placeholder="Search our store"
          className="search-input"
        />
      )}
    </div>
  );
};

export default SearchBar;
