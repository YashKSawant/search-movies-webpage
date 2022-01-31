import React from 'react';
import { Link } from 'react-router-dom';
import { BiError } from 'react-icons/bi';
const Error = () => {
  return (
    <div className="page-error">
      <h2>
        <BiError />
      </h2>
      <h3>Oops!! This Page doesn't exist.</h3>
      <Link className="btn" to="/">
        back to home
      </Link>
    </div>
  );
};

export default Error;
