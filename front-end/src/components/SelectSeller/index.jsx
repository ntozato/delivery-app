import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import api from '../../api/index';
import Context from '../../context/Context';
import './style.css';

const SelectSeller = ({ handleChange }) => {
  const [sellers, setSellers] = useState([]);
  const { setDetailsAddress } = useContext(Context);

  const getAllUsers = async () => {
    const allUsers = await api.getAllUsers();
    const data = allUsers.data.filter((user) => user.role === 'seller');
    setSellers(data);
    setDetailsAddress(
      { address: '', number: '', sellerId: String(data[0].id) },
    );
  };

  useEffect(() => {
    getAllUsers();
    // eslint-disable-next-line
  }, []);

  const renderSellers = () => sellers.map((seller) => (
    <option
      value={ seller.id }
      key={ seller.id }
    >
      { seller.name }
    </option>));

  return (
    <label htmlFor="seller">
      Vendedor responsável
      <select
        data-testid="customer_checkout__select-seller"
        id="seller"
        name="sellerId"
        onChange={ handleChange }
      >
        { sellers.length > 0 ? renderSellers() : '' }
      </select>
    </label>
  );
};

export default SelectSeller;

SelectSeller.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
