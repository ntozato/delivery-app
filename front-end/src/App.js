import React, { useContext } from 'react';
import './App.css';
import rockGlass from './images/rockGlass.svg';
import Context from './context/Context';

function App() {
  const { test } = useContext(Context);
  return (
    <div className="App">
      <div>{test}</div>
      <span className="logo">TRYBE</span>
      <object className="rocksGlass" type="image/svg+xml" data={ rockGlass }>
        Glass
      </object>
    </div>
  );
}

export default App;
