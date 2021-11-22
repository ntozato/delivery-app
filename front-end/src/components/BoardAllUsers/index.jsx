import React, { useContext, useEffect, useState } from 'react';
import api from '../../api/index';
import Context from '../../context/Context';
import './style.css';

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
    <div className="containerBoardAllUsers">
      <h3 className="title">Lista de Usuários</h3>
      { allUsers.map(({ id, name, email, role }, index) => (
        <div key={ id } className="divUsers">
          <p
            className="userId"
            data-testid={ `admin_manage__element-user-table-item-number-${index}` }
          >
            { id }

          </p>
          <p
            className="userName"
            data-testid={ `admin_manage__element-user-table-name-${index}` }
          >
            { name }

          </p>
          <p
            className="userEmail"
            data-testid={ `admin_manage__element-user-table-email-${index}` }
          >
            { email }

          </p>
          <p
            className="userRole"
            data-testid={ `admin_manage__element-user-table-role-${index}` }
          >
            { role }

          </p>
          <button
            className="userButton"
            data-testid={ `admin_manage__element-user-table-remove-${index}` }
            type="button"
          >
            Excluir

          </button>
        </div>
      )) }
    </div>
  );
}
