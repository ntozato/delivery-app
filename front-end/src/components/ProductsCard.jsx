import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../context/Context';
import './ProductsCard.css';

export default function ProdutsCard({
  product: { id, name, price, url_image: urlImage } }) {
  const { quantityProducts } = useContext(Context);

  return (
    <div id="product-card">
      <p data-testid={ `customer_products__element-card-price-${id}` }>
        Price:
        { `  R$ ${price.replace('.', ',')}` }

      </p>
      <img
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ urlImage }
        alt={ name }
      />
      <p data-testid={ `customer_products__element-card-title-${id}` }>{ name }</p>
      <div>
        <button
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          type="button"
        >
          -

        </button>
        <input
          id="quantity-input"
          type="text"
          data-testid={ `customer_products__input-card-quantity-${id}` }
          value={ quantityProducts[id] }
        />
        <button
          data-testid={ `customer_products__button-card-add-item-${id}` }
          type="button"
        >
          +

        </button>
      </div>
    </div>
  );
}

ProdutsCard.propTypes = {
  product: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ).isRequired,
};
