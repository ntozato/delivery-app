import React, { useState, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import Context from '../context/Context';
import api from '../api';
import { registerIsDisabled } from '../helpers/validations';

const RegisterButton = () => {
  const { registerData, setUserData } = useContext(Context);
  const [redirect, setRedirect] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async () => {
    try {
      const result = await api.register(registerData);
      if (result.statusText === 'Created') {
        try {
          await api.login(
            { email: registerData.email, password: registerData.password },
          ).then(({ data: token }) => {
            localStorage.setItem('user', JSON.stringify({ token }));
            setUserData({ token, ...result.data });
            setRedirect(!redirect);
          });
        } catch (error) {
          console.log(error);
        }
      }
    } catch (error) {
      setIsError(!isError);
    }
  };

  return (
    <div>
      {redirect && <Navigate to="/customer/products" />}
      <button
        data-testid="common_register__button-register"
        type="button"
        disabled={ registerIsDisabled(registerData) }
        onClick={ handleSubmit }
      >
        Cadastrar

      </button>
      { isError
        && (
          <p data-testid="common_register__element-invalid_register">
            Erro ao registrar usuário
          </p>
        )}
    </div>
  );
};

export default RegisterButton;
