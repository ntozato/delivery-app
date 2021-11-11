import React from 'react';

const RegisterScreen = () => (
  <div>
    <form>
      <h1>Registre sua Conta</h1>
      <label htmlFor="name">
        Nome
        <input data-testid="common_register__input-name" id="name" />
      </label>
      <label htmlFor="email">
        Email
        <input data-testid="common_register__input-email" type="email" id="email" />
      </label>
      <label htmlFor="password">
        Senha
        <input
          data-testid="common_register__input-password"
          type="password"
          id="password"
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

export default RegisterScreen;
