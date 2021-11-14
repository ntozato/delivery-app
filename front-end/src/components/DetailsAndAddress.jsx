import React, { useContext } from 'react';
import Context from '../context/Context';

const DetailsAndAddress = () => {
  const { detailsAddress, setDetailsAddress } = useContext(Context);

  const handleChange = ({ target: { value, name } }) => {
    setDetailsAddress({ ...detailsAddress, [name]: value });
  };

  return (
    <div>
      <h3>Detalhes e endereço para entrega</h3>
      <form>
        <label htmlFor="seller">
          Vendedor responsável
          <select id="seller" name="seller" onChange={ handleChange }>
            <option>Vendedor 1</option>
            <option>Vendedor 2</option>
          </select>
        </label>
        <label htmlFor="address">
          Endereço
          <input id="address" name="address" onChange={ handleChange } />
        </label>
        <label htmlFor="number">
          Número
          <input id="number" name="number" type="number" onChange={ handleChange } />
        </label>
      </form>
    </div>
  );
};

export default DetailsAndAddress;
