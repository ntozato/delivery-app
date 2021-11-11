import React, { useContext } from 'react';
import Context from '../context/Context';

const RegisterScreen = () => {
  const { handleChange } = useContext(Context);

  return (
    <div>
      <form>
        <h1>Registre sua Conta</h1>
        <label htmlFor="name">
          Nome
          <input
            name="name"
            data-testid="common_register__input-name"
            id="name"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            name="email"
            data-testid="common_register__input-email"
            type="email"
            id="email"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            name="password"
            data-testid="common_register__input-password"
            type="password"
            id="password"
            onChange={ handleChange }
          />
        </label>
        <button
          data-testid="common_register__button-register"
          type="button"
        >
          Cadastrar

        </button>
      </form>
    </div>
  );
};

export default RegisterScreen;
