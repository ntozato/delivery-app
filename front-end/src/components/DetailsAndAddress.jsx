import React, { useContext } from 'react';
import Context from '../context/Context';
import SelectSeller from './SelectSeller';

const DetailsAndAddress = () => {
  const { detailsAddress, setDetailsAddress } = useContext(Context);

  const handleChange = ({ target: { value, name } }) => {
    setDetailsAddress({ ...detailsAddress, [name]: value });
  };

  return (
    <div>
      <h3>Detalhes e endereço para entrega</h3>
      <form>
        <SelectSeller handleChange={ handleChange } />
        <label htmlFor="address">
          Endereço
          <input
            data-testid="customer_checkout__input-address"
            id="address"
            name="address"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="number">
          Número
          <input
            data-testid="customer_checkout__input-addressNumber"
            id="number"
            name="number"
            type="number"
            onChange={ handleChange }
          />
        </label>
      </form>
    </div>
  );
};

export default DetailsAndAddress;
