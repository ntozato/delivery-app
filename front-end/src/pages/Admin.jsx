import React from 'react';
import BoardAllUsers from '../components/BoardAllUsers';
import FormAdminCreateUser from '../components/FormAdminCreateUser';
import NavBar from '../components/NavBar';
import './Admin.css';
// import { Navigate } from 'react-router-dom';

function Admin() {
  return (
    <div className="Admin">
      <NavBar />
      <FormAdminCreateUser />
      <BoardAllUsers />
    </div>
  );
}

export default Admin;
