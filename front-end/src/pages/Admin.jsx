import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import api from '../api/index';
// import { Navigate } from 'react-router-dom';

function Admin() {
  const dafaultUserData = {
    name: '',
    email: '',
    password: '',
    role: 'seller',
  };
  const [newUserData, setNewUserData] = useState(dafaultUserData);

  const handleChangeNewUser = ({ target: { name, value } }) => {
    const aux = { ...newUserData };
    aux[name] = value;
    setNewUserData(aux);
  };

  const handleCLickSendNewUser = async () => {
    try {
      await api.register(newUserData);
      setNewUserData(dafaultUserData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="Admin">
      <NavBar />
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
          <option value="seller" selected>Vendedor</option>
          <option value="customer">Cliente</option>
          <option value="administrator">Administrador</option>
        </select>

        <button
          data-testid="admin_manage__button-register"
          type="button"
          onClick={ handleCLickSendNewUser }
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default Admin;
