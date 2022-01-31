import React from 'react';
import { useGlobalContext } from './context';
import { FaExclamationCircle } from 'react-icons/fa';
const SearchForm = () => {
  const { query, setQuery, error } = useGlobalContext();
  return (
    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
      <h2>Search Movies</h2>
      <input
        type="search"
        className="form-input"
        value={query}
        placeholder="Type atleast more than 3 characters"
        onChange={(e) => setQuery(e.target.value)}
      />
      {error.show && (
        <div className="error">
          <FaExclamationCircle />
          {error.msg}
        </div>
      )}
    </form>
  );
};

export default SearchForm;
