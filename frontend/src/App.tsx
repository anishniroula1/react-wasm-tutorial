import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [ans, setAns] = useState(0);
  const [wasmDemo, setWasmDemo] = useState(null);

  const loadWasm = async () => {
    const wasmDemo = await import('wasm-lib');
    setWasmDemo(wasmDemo);
  };
  useEffect(() => {
    loadWasm();
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>1 + 1 = 2</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
