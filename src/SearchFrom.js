import React from 'react';
import { useGlobalContext } from './context';
const SearchForm = () => {
  return (
    <form className="search-form" onSubmit={(e) => e.preventDefault}>
      <h2>Search a movie</h2>
    </form>
  );
};

export default SearchForm;
