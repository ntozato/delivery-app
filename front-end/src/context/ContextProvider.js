import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

const ContextProvider = ({ children }) => {
  const testOrders = [
    { name: 'cachaça', price: '5.50' },
    { name: 'cerveja', price: '2.30' },
    { name: 'licor', price: '32,90' },
  ];

  const [registerData, setRegisterData] = useState({ name: '', email: '', password: '' });
  const [orders, setOrders] = useState(testOrders);

  const handleChange = ({ target: { value, name } }) => {
    setRegisterData({ ...registerData, [name]: value });
  };

  const contextValue = {
    registerData,
    setRegisterData,
    handleChange,
    orders,
    setOrders,
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
