import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Card, Button, FormControl } from 'react-bootstrap';
import Context from '../../context/Context';
import './style.css';

export default function ProdutsCard({
  product: { id, name, price, url_image: urlImage } }) {
  const {
    orders,
    setOrders,
    setTotalPrice } = useContext(Context);

  const [quantityCard, setQuantityCard] = useState(0);

  useEffect(() => {
    const aux = { ...orders };
    aux[id].qtd = Number(quantityCard);
    localStorage.setItem('carrinho', JSON.stringify(aux));
    const keysProducts = Object.keys(aux);
    const arrValues = keysProducts.map((key) => aux[key].qtd * aux[key].price);
    const value = arrValues.reduce((acc, curr) => acc + curr);
    setTotalPrice(value.toFixed(2));
    // eslint-disable-next-line
  }, [quantityCard]);

  const updateTotalPrice = {
    add: () => setQuantityCard(Number(quantityCard) + 1),
    remove: () => setQuantityCard(Number(quantityCard) - 1),
  };

  const increaseProduct = () => {
    const aux = { ...orders };
    aux[id].qtd += 1;
    setOrders(aux);
    updateTotalPrice.add();
  };
  const decreaseProduct = () => {
    const aux = { ...orders };
    if (aux[id].qtd > 0) {
      aux[id].qtd -= 1;
      setOrders(aux);
      updateTotalPrice.remove();
    }
  };

  return (
    <Card style={ { width: '18rem' } }>
      <Card.Img
        variant="top"
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ urlImage }
        alt={ name }
      />
      <Card.Body>
        <Card.Title
          data-testid={ `customer_products__element-card-title-${id}` }
        >
          { name }
        </Card.Title>
        <Card.Text data-testid={ `customer_products__element-card-price-${id}` }>
          Price:
          { `  R$ ${price.replace('.', ',')}` }

        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Button
          onClick={ decreaseProduct }
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          type="button"
        >
          -

        </Button>
        <FormControl
          className="quantity-input"
          type="text"
          data-testid={ `customer_products__input-card-quantity-${id}` }
          value={ quantityCard }
          onChange={ ({ target: { value } }) => setQuantityCard(value) }
        />
        <Button
          onClick={ increaseProduct }
          data-testid={ `customer_products__button-card-add-item-${id}` }
          type="button"
        >
          +

        </Button>
      </Card.Body>
    </Card>

  );
}

ProdutsCard.propTypes = {
  product: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ).isRequired,
};
