import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import api from '../api/index';
// import { Navigate } from 'react-router-dom';

function Admin() {
  const [newUserData, setNewUserData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'seller',
  });

  const handleChangeNewUser = ({ target: { name, value } }) => {
    const aux = { ...newUserData };
    aux[name] = value;
    setNewUserData(aux);
  };

  return (
    <div className="Admin">
      <NavBar />
      <form>
        <input
          type="text"
          name="name"
          placeholder="Nome Sobrenome"
          onChange={ (e) => handleChangeNewUser(e) }
        />

        <input
          type="text"
          name="email"
          placeholder="seu-email@site.com.br"
          onChange={ (e) => handleChangeNewUser(e) }
        />

        <input
          type="password"
          name="password"
          placeholder="******"
          onChange={ (e) => handleChangeNewUser(e) }
        />

        <select name="role" onChange={ (e) => handleChangeNewUser(e) }>
          <option value="seller" selected>Vendedor</option>
          <option value="customer">Cliente</option>
          <option value="administrator">Administrador</option>
        </select>

        <button
          type="button"
          onClick={ () => api.register(newUserData) }
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default Admin;
