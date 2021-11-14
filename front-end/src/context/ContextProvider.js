import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

const ContextProvider = ({ children }) => {
  // esse testOrders é só para testar nosso componente enquanto não for possível adicionar items ao carrinho
  const testOrders = [
    { name: 'cachaça', price: 5.50, quantity: 2 },
    { name: 'cerveja', price: 2.30, quantity: 5 },
    { name: 'licor', price: 32.90, quantity: 1 },
  ];

  const detailAddressInitialState = { address: '', number: '', seller: 'vendedor 1' };

  const [registerData, setRegisterData] = useState({ name: '', email: '', password: '' });
  const [orders, setOrders] = useState(testOrders);
  const [detailsAddress, setDetailsAddress] = useState(detailAddressInitialState);

  const handleChange = ({ target: { value, name } }) => {
    setRegisterData({ ...registerData, [name]: value });
  };

  const contextValue = {
    registerData,
    setRegisterData,
    handleChange,
    orders,
    setOrders,
    detailsAddress,
    setDetailsAddress,
  };

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContextProvider;
