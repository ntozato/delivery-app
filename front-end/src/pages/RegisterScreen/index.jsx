import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Context from '../../context/Context';
import RegisterButton from '../../components/RegisterButton';
import './style.css';

const RegisterScreen = () => {
  const { handleChange } = useContext(Context);

  return (
    <div className="registerScreen-main-div">
      <h1>Registre sua Conta</h1>
      <Form className="bootstrap-form">
        <Form.Group
          className="mb-4"
        >
          <Form.Label
            htmlFor="name"
          >
            Nome
          </Form.Label>
          <Form.Control
            name="name"
            data-testid="common_register__input-name"
            type="text"
            placeholder="Digite seu nome"
            onChange={ handleChange }
          />
        </Form.Group>

        <Form.Group
          className="mb-4"
        >
          <Form.Label htmlFor="email">
            Email
          </Form.Label>
          <Form.Control
            name="email"
            data-testid="common_register__input-email"
            type="email"
            placeholder="Digite seu email"
            id="email"
            onChange={ handleChange }
          />
        </Form.Group>

        <Form.Group
          className="mb-4"
        >
          <Form.Label htmlFor="password">
            Senha
          </Form.Label>
          <Form.Control
            name="password"
            data-testid="common_register__input-password"
            type="password"
            id="password"
            placeholder="Digite sua senha"
            onChange={ handleChange }
          />
        </Form.Group>
        <RegisterButton />
      </Form>
    </div>
  );
};

export default RegisterScreen;
