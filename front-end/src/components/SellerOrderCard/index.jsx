import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import formatId from '../../helpers/formatId';
import './style.css';

function SellerOrderCard({ order }) {
  const { id, status,
    sale_date: date,
    total_price: price,
    delivery_address: address,
    delivery_number: addressNumber } = order;
  const navigate = useNavigate();

  const colorStatus = {
    Pendente: '#D3C63D',
    Preparando: '#86D53B',
    Entregue: '#3BD5AF',
  };

  return (
    <button
      type="button"
      className="orderCard"
      onClick={ () => navigate(`/seller/orders/${id}`) }
    >
      <div
        className="idOrder"
        data-testid={ `seller_orders__element-order-id-${id}` }
      >
        { formatId(id) }
      </div>
      <div className="containerOrder">
        <div
          className="statusOrder"
          style={ { backgroundColor: colorStatus[status] } }
          data-testid={ `seller_orders__element-delivery-status-${id}` }
        >
          { status }
        </div>
        <div className="dateValueOrder">
          <div
            className="dateOrder"
            data-testid={ `seller_orders__element-order-date-${id}` }
          >
            { moment(date).format('DD/MM/YYYY') }
          </div>
          <div
            className="valueOrder"
            data-testid={ `seller_orders__element-card-price-${id}` }
          >
            { 'R$ ' }
            <p data-testid={ `seller_orders__element-card-price-${id}` }>
              { price.replace('.', ',') }
            </p>
          </div>
        </div>
        <p
          className="address"
          data-testid={ `seller_orders__element-card-address-${id}` }
        >
          { `${address},${addressNumber}` }
        </p>
      </div>
    </button>
  );
}

SellerOrderCard.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number,
    status: PropTypes.string,
    sale_date: PropTypes.string,
    total_price: PropTypes.string,
    delivery_address: PropTypes.string,
    delivery_number: PropTypes.string,
  }).isRequired,
};

export default SellerOrderCard;
