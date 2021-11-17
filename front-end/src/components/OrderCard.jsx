import React from 'react';
import PropTypes from 'prop-types';
import './OrderCard.css';

function OrderCard({ order }) {
  const { id, status, data, valor } = order;

  return (
    <div className="orderCard">
      <div className="idOrder">
        {id}
      </div>
      <div className="statusOrder">
        {status}
      </div>
      <div className="dataValueOrder">
        <div className="dataOrder">
          {data}
        </div>
        <div className="valueOrder">
          {valor}
        </div>
      </div>
      {/* <p>{`${id} ${status} ${data} ${valor}`}</p> */}
    </div>
  );
}

OrderCard.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number,
    status: PropTypes.string,
    data: PropTypes.string,
    valor: PropTypes.number,
  }).isRequired,
};

export default OrderCard;
