import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

const ContextProvider = ({ children }) => {
  const [registerData, setRegisterData] = useState({ name: '', email: '', password: '' });

  const handleChange = ({ target: { value, name } }) => {
    setRegisterData({ ...registerData, [name]: value });
  };

  const contextValue = {
    registerData,
    setRegisterData,
    handleChange,
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
