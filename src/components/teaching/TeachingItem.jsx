import React from 'react';
import { Link } from 'react-router-dom';

const TeachingItem = ({ item }) => {
  return (
    <Link
      to={`${item.title.replace(/\s+/g, '-').toLowerCase()}`}
      className="teaching__button"
    >
      <div className="teaching__card" key={item.id}>
        <img src={item.image} alt="" className="teaching__img" />
        <h3 className="teaching__title">{item.title}</h3>
      </div>
    </Link>
  );
};

export { TeachingItem };
