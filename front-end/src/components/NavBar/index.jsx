import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, Container, Nav, Image } from 'react-bootstrap';
import Context from '../../context/Context';
import './style.css';
import logo from '../../images/logomin.png';

export default function NavBar() {
  const { userData, setUserData } = useContext(Context);
  const navigate = useNavigate();

  const resetLocal = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('carrinho');
    setUserData(false);
    navigate('/login');
  };

  const { role } = userData;
  const buttonName = {
    administrator: 'Gerenciar Usuários',
    customer: 'Meu Pedidos',
    seller: 'Pedidos',
  };

  return (
    <Navbar bg="dark" variant="dark" className="navbar-div">
      <Container className="container-navbar">
        <Navbar.Brand href="#home" className="justify-content-start">
          <Image src={ logo } />
        </Navbar.Brand>
        <Nav className="justify-content-start">
          <Nav.Link
            type="button"
            data-testid="customer_products__element-navbar-link-orders"
            onClick={ () => navigate(
              role === 'administrator' ? '/admin/manage' : `/${role}/orders`,
            ) }
          >
            { buttonName[role] }
          </Nav.Link>

          {
            role === 'customer'
            && (
              <Nav.Link
                variant="primary"
                data-testid="customer_products__element-navbar-link-products"
                onClick={ () => navigate('/customer/products') }
              >
                Produtos
              </Nav.Link>
            )
          }
        </Nav>
        <Nav className="justify-content-center">
          <p data-testid="customer_products__element-navbar-user-full-name">
            { userData.name }
          </p>
        </Nav>
        <Nav className="justify-content-end">
          <Nav.Link
            type="button"
            data-testid="customer_products__element-navbar-link-logout"
            onClick={ resetLocal }
          >
            Sair
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

/*
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <a
          href="/"
          className="navbar-brand"
        >

        </a>
        { renderButtons() }
      </div>
    </nav>
  );
} */
