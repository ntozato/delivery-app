import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
import Raiz from './pages/Raiz';
import Login from './pages/Login';
// import rockGlass from './images/rockGlass.svg';
// import Context from './context/Context';

function App() {
  // const { test } = useContext(Context);
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={ <Raiz /> } />
        <Route exact path="/login" element={ <Login /> } />
      </Routes>
    </div>
  );
}

export default App;
