import React, { useContext, useEffect } from 'react';
import NavBar from '../components/NavBar';
// import { Navigate } from 'react-router-dom';
import Context from '../context/Context';
import api from '../api/index';

function Customer() {
  const { userEmail, userData, setUserData } = useContext(Context);

  const getUserData = async (email) => {
    try {
      const { data: user } = await api.getDataUser(email);

      const { token } = JSON.parse(localStorage.getItem('user'));
      user.token = token;
      localStorage.setItem('user', JSON.stringify(user));

      setUserData(user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!userData) {
      getUserData(userEmail);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="Customer">
      <NavBar />
    </div>
  );
}

export default Customer;

/*
zebirita@email.com
$#zebirita#$
*/
