import React, { useContext, useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { Image, Form, Button } from 'react-bootstrap';
import api from '../../api';
import { loginIsDisabled } from '../../helpers/validations';
import Context from '../../context/Context';
import beerImage from '../../images/a.jpg';
import logo from '../../images/birita2.jpeg';
import './style.css';

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

      <div className="div-form">
        <div style={ { display: 'flex', justifyContent: 'center' } }>
          <Image
            style={ { width: '200px' } }
            className="logo"
            src={ logo }
            alt="Logotipo do Zé birita"
            thumbnail
          />
        </div>
        <Form>
          <Form.Group className="mb-3 mt-5" controlId="formBasicEmail">
            <Form.Control
              type="text"
              placeholder="email@trybeer.com.br"
              data-testid="common_login__input-email"
              onChange={ (e) => setEmail(e.target.value) }
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="*****"
              data-testid="common_login__input-password"
              onChange={ (e) => setPassword(e.target.value) }
            />
          </Form.Group>

          <div className="div-buttons">
            <Button
              variant="warning"
              className="login-button"
              type="button"
              disabled={ loginIsDisabled({ email, password }) }
              onClick={ handleClickLogin }
              data-testid="common_login__button-login"
            >
              LOGIN
            </Button>
            <Button
              variant="warning"
              className="register-button"
              type="button"
              onClick={ () => setRedirect(!redirect) }
              data-testid="common_login__button-register"
            >
              Ainda não tenho conta
            </Button>
          </div>
        </Form>
        { isError && (
          <h1 data-testid="common_login__element-invalid-email">
            Um Erro qualquer
          </h1>
        ) }
      </div>
      <div className="div-image">
        <Image src={ beerImage } alt="imagem de cerveja" />
      </div>
    </div>
  );
}

export default Login;

/*
zebirita@email.com
$#zebirita#$
*/
