import React, { useContext } from 'react';
import Context from '../context/Context';

const RegisterButton = () => {
  const { registerData } = useContext(Context);
  const nameMinLength = 12;
  const passwordMinLength = 6;
  const emailRegex = /\S+@\S+\.\S+/;
  const isEmailValid = emailRegex.test(registerData.email);
  const isValidName = registerData.name.length >= nameMinLength;
  const isValidPassword = registerData.password.length >= passwordMinLength;
  const isDisabled = !(isValidName && isEmailValid && isValidPassword);
  return (
    <button
      data-testid="common_register__button-register"
      type="button"
      disabled={ isDisabled }
    >
      Cadastrar

    </button>
  );
};

export default RegisterButton;
