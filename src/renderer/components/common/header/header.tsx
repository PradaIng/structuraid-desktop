import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Link to="/modelling-ui-poc">
        <p>Go Home</p>
      </Link>
    </>
  );
};

export default Header;
