import React, { useContext, useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import api from '../../api/index';
import Context from '../../context/Context';
// import './style.css';

export default function BoardAllUsers() {
  const { isNewUser } = useContext(Context);
  const [allUsers, setAllUsers] = useState([]);
  useEffect(() => {
    const getAllUsers = async () => {
      const { data } = await api.getAllUsers();
      console.log(data);
      setAllUsers(data);
    };
    getAllUsers();
  }, [isNewUser]);
  return (
    <Table striped bordered hover variant="dark" className="ml-2 mr-2">
      <tbody>
        { allUsers.map(({ id, name, email, role }, index) => (
          <tr key={ id } className="divUsers">
            <td
              className="userId"
              data-testid={ `admin_manage__element-user-table-item-number-${index}` }
            >
              { id }

            </td>
            <td
              className="userName"
              data-testid={ `admin_manage__element-user-table-name-${index}` }
            >
              { name }

            </td>
            <td
              className="userEmail"
              data-testid={ `admin_manage__element-user-table-email-${index}` }
            >
              { email }

            </td>
            <td
              className="userRole"
              data-testid={ `admin_manage__element-user-table-role-${index}` }
            >
              { role }

            </td>
            <td>
              <Button
                variant="light"
                className="userButton"
                data-testid={ `admin_manage__element-user-table-remove-${index}` }
                type="button"
              >
                Excluir

              </Button>
            </td>
          </tr>
        )) }
      </tbody>
    </Table>
  );
}
