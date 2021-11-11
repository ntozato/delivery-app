import React, { useState } from 'react';
// import Context from './context/Context';

function Login() {
  // const { test } = useContext(Context);
  const [isError] = useState(false);
  return (
    <div className="Login">
      <form>
        <input
          placeholder="email@trybeer.com.br"
          data-testId="common_login__input-email"
        />
        <input
          placeholder="*****"
          data-testId="common_login__input-password"
        />
        <button
          type="button"
          data-testId="common_login__button-login"
        >
          LOGIN
        </button>
        <button
          type="button"
          data-testId="common_login__button-register"
        >
          Ainda não tenho conta
        </button>
      </form>
      {
        isError
        && <h1 data-testId="common_login__element-invalid-email">Um Erro qualquer :)</h1>
      }
    </div>
  );
}

export default Login;
