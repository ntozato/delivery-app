import React, { useState } from 'react';
import BoardAllUsers from '../components/BoardAllUsers';
import FormAdminCreateUser from '../components/FormAdminCreateUser';
import NavBar from '../components/NavBar';
import './Admin.css';

// import { Navigate } from 'react-router-dom';

function Admin() {
  const [errorCreate, setErrorCreate] = useState(false);
  return (
    <div className="Admin">
      <NavBar />
      <FormAdminCreateUser serError={ setErrorCreate } />
      { errorCreate
        && <p data-testid="admin_manage__element-invalid-register">Error Criação</p>}
      <BoardAllUsers />
    </div>
  );
}

export default Admin;
