import React from 'react';
import PropTypes from 'prop-types';

export default function ProdutsCard({ product: { name, price, url_image: urlImage } }) {
  return (
    <div>
      <p>{ price }</p>
      <p>{ name }</p>
      <img src={ urlImage } alt={ name } />
      <button type="button">+</button>
      <p>0</p>
      <button type="button">-</button>
    </div>
  );
}

ProdutsCard.propTypes = {
  product: PropTypes.objectOf(
    PropTypes.string,
  ).isRequired,
};
