import React from 'react';
import PropTypes from 'prop-types';

export default function ProdutsCard({
  product: { id, name, price, url_image: urlImage } }) {
  return (
    <div>
      <p data-testid={ `customer_products__element-card-price-${id}` }>
        { price.replace('.', ',') }

      </p>
      <img
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        style={ { width: '100px' } }
        src={ urlImage }
        alt={ name }
      />
      <p data-testid={ `customer_products__element-card-title-${id}` }>{ name }</p>

      <button
        data-testid={ `customer_products__button-card-rm-item-${id}` }
        type="button"
      >
        -

      </button>
      <input
        style={ { width: '20px' } }
        type="number"
        data-testid={ `customer_products__input-card-quantity-${id}` }
      />
      <button
        data-testid={ `customer_products__button-card-add-item-${id}` }
        type="button"
      >
        +

      </button>
    </div>
  );
}

ProdutsCard.propTypes = {
  product: PropTypes.objectOf(
    PropTypes.string,
  ).isRequired,
};
