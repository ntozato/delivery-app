import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

const ContextProvider = ({ children }) => {
  const [registerData, setRegisterData] = useState({ name: '', email: '', password: '' });
  const [detailsAddress, setDetailsAddress] = useState({});
  const [userEmail, setUserEmail] = useState('');
  const [userData, setUserData] = useState(false);
  const [orders, setOrders] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [saleData, setSaleData] = useState('');
  const [isNewUser, setisNewUser] = useState(false);

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
    userEmail,
    setUserEmail,
    userData,
    setUserData,
    totalPrice,
    setTotalPrice,
    saleData,
    setSaleData,
    isNewUser,
    setisNewUser,
  };

  return (
    <Context.Provider value={ contextValue }>
      { children }
    </Context.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContextProvider;
