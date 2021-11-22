import React from 'react';
import { Navigate } from 'react-router-dom';

function Raiz() {
  return (
    <div className="Raiz">
      <Navigate to="/login" />
    </div>
  );
}

export default Raiz;
