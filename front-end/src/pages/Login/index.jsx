import React, { useContext, useState, useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Navigate } from 'react-router-dom';
import api from '../../api';
import { loginIsDisabled } from '../../helpers/validations';
import Context from '../../context/Context';

function Login() {
  const { setUserEmail, setUserData } = useContext(Context);
  const [isError, setIsError] = useState(false);
  const [loginOk, setLoginOk] = useState(false);

  // const [email, setEmail] = useState('fulana@deliveryapp.com');
  // const [password, setPassword] = useState('fulana@123');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [userRole, setUserRole] = useState('');

  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setUserData({ ...user });
      setUserRole(user.role);
      setLoginOk(true);
    }
    // eslint-disable-next-line
  }, []);

  const handleClickLogin = async () => {
    try {
      await api.login({ email, password }).then(({ data: user }) => {
        localStorage.setItem('user', JSON.stringify({ ...user }));
        setUserData(user);
        setUserRole(user.role);
        setUserEmail(email);
        setIsError(false);
        setLoginOk(true);
      });
    } catch (error) {
      console.log(error);
      setIsError(true);
    }
  };

  const urlByRole = {
    customer: '/customer/products',
    seller: '/seller/orders',
    administrator: '/admin/manage',
  };

  return (
    <div className="Login">
      { loginOk && <Navigate to={ urlByRole[userRole] } /> }
      { redirect && <Navigate to="/register" /> }
      <form>
        <CopyToClipboard
          text="zebirita@email.com"
          onCopy={ () => console.log('copiou - zebirita@email.com') }
        >
          <span>zebirita@email.com</span>
        </CopyToClipboard>
        <br />

        <CopyToClipboard
          text="$#zebirita#$"
          onCopy={ () => console.log('copiou - $#zebirita#$') }
        >
          <span>$#zebirita#$</span>
        </CopyToClipboard>
        <br />
        <br />

        <CopyToClipboard
          text="fulana@deliveryapp.com"
          onCopy={ () => console.log('copiou - fulana@deliveryapp.com') }
        >
          <span>fulana@deliveryapp.com</span>
        </CopyToClipboard>
        <br />

        <CopyToClipboard
          text="fulana@123"
          onCopy={ () => console.log('copiou - fulana@123') }
        >
          <span>fulana@123</span>
        </CopyToClipboard>
        <br />
        <br />

        <CopyToClipboard
          text="adm@deliveryapp.com"
          onCopy={ () => console.log('copiou - adm@deliveryapp.com') }
        >
          <span>adm@deliveryapp.com</span>
        </CopyToClipboard>
        <br />

        <CopyToClipboard
          text="--adm2@21!!--"
          onCopy={ () => console.log('copiou - --adm2@21!!--') }
        >
          <span>--adm2@21!!--</span>
        </CopyToClipboard>
        <br />
        <br />

        <input
          type="text"
          placeholder="email@trybeer.com.br"
          data-testid="common_login__input-email"
          onChange={ (e) => setEmail(e.target.value) }
        />
        <input
          type="password"
          placeholder="*****"
          data-testid="common_login__input-password"
          onChange={ (e) => setPassword(e.target.value) }
        />
        <button
          type="button"
          disabled={ loginIsDisabled({ email, password }) }
          onClick={ handleClickLogin }
          data-testid="common_login__button-login"
        >
          LOGIN
        </button>
        <button
          type="button"
          onClick={ () => setRedirect(!redirect) }
          data-testid="common_login__button-register"
        >
          Ainda não tenho conta
        </button>
      </form>
      { isError && (
        <h1 data-testid="common_login__element-invalid-email">
          Um Erro qualquer
        </h1>
      ) }
    </div>
  );
}

export default Login;

/*
zebirita@email.com
$#zebirita#$
*/
