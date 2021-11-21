import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import api from '../api/index';
import { registerIsDisabled } from '../helpers/validations';
import Context from '../context/Context';

export default function FormAdminCreateUser({ serError }) {
  const dafaultUserData = {
    name: '',
    email: '',
    password: '',
    role: 'seller',
  };
  const { isNewUser, setisNewUser, userData } = useContext(Context);
  const [newUserData, setNewUserData] = useState(dafaultUserData);

  const handleChangeNewUser = ({ target: { name, value } }) => {
    const aux = { ...newUserData };
    aux[name] = value;
    setNewUserData(aux);
  };
  const handleCLickSendNewUser = async () => {
    try {
      await api.registerAdmin(newUserData, userData.token);
      setNewUserData(dafaultUserData);
      setisNewUser(!isNewUser);
      serError(false);
    } catch (error) {
      console.log(error);
      serError(true);
    }
  };

  return (
    <form>
      <input
        data-testid="admin_manage__input-name"
        type="text"
        name="name"
        placeholder="Nome Sobrenome"
        value={ newUserData.name }
        onChange={ (e) => handleChangeNewUser(e) }
      />

      <input
        data-testid="admin_manage__input-email"
        type="text"
        name="email"
        placeholder="seu-email@site.com.br"
        value={ newUserData.email }
        onChange={ (e) => handleChangeNewUser(e) }
      />

      <input
        data-testid="admin_manage__input-password"
        type="password"
        name="password"
        placeholder="******"
        value={ newUserData.password }
        onChange={ (e) => handleChangeNewUser(e) }
      />

      <select
        data-testid="admin_manage__select-role"
        name="role"
        value={ newUserData.role }
        onChange={ (e) => handleChangeNewUser(e) }
      >
        <option value="seller">Vendedor</option>
        <option value="customer">Cliente</option>
        <option value="administrator">Administrador</option>
      </select>

      <button
        data-testid="admin_manage__button-register"
        type="button"
        onClick={ handleCLickSendNewUser }
        disabled={ registerIsDisabled(newUserData) }
      >
        Cadastrar
      </button>
    </form>
  );
}

FormAdminCreateUser.propTypes = {
  serError: PropTypes.func.isRequired,
};
