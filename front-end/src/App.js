import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RegisterScreen from './components/RegisterScreen';

function App() {
  return (
    <Routes>
      <Route path="/register" element={ <RegisterScreen /> } />
      {/* <Route path="/" component={ Login } />
        <Route path="/login" component={ Login } /> */}
    </Routes>
  );
}

export default App;
