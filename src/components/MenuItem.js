import React from 'react';
import { Link } from 'react-router-dom';

function MenuItem({image, name, price }) {
  const path = `/menu/${name.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <Link to={path} className="menuItem">
        <div style={{  backgroundImage: `url(${image})` }}></div>
        <h1>{name}</h1>
        <p>${price}</p>
    </Link>
  );
}

export default MenuItem;