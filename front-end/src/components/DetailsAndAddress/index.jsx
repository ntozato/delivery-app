import React, { useContext } from 'react';
import { Form, Row, Col, Badge } from 'react-bootstrap';
import Context from '../../context/Context';
import SelectSeller from '../SelectSeller';
import './style.css';

const DetailsAndAddress = () => {
  const { detailsAddress, setDetailsAddress } = useContext(Context);

  const handleChange = ({ target: { value, name } }) => {
    setDetailsAddress({ ...detailsAddress, [name]: value });
  };

  const renderColumns = () => (
    <>
      <Col>
        <SelectSeller handleChange={ handleChange } />
      </Col>
      <Col>
        <Form.Group>
          <Form.Label htmlFor="address">
            Endereço
          </Form.Label>
          <Form.Control
            data-testid="customer_checkout__input-address"
            id="address"
            name="address"
            onChange={ handleChange }
          />

        </Form.Group>
      </Col>
      <Col>
        <Form.Group>
          <Form.Label htmlFor="number">
            Número
          </Form.Label>
          <Form.Control
            data-testid="customer_checkout__input-addressNumber"
            id="number"
            name="number"
            type="number"
            onChange={ handleChange }
          />
        </Form.Group>
      </Col>
    </>
  );

  return (
    <div>
      <h3 style={ { width: '100%' } }>
        <Badge
          style={ { width: '100%' } }
          bg="secondary"
        >
          Detalhes e endereço para entrega
        </Badge>
      </h3>
      <Form>
        <Row>
          {renderColumns()}
        </Row>
      </Form>
    </div>
  );
};

export default DetailsAndAddress;
