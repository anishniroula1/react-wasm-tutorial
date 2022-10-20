import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import init, {InitOutput} from 'wasm-react-test';

function App() {
  const [wasmFunc, setWasmFunc] = useState<InitOutput>({add: () => 0, subtract: () => 0, memory: new WebAssembly.Memory({initial: 1})});

  const getAllFunction = async () => {
      const wasm = await init();
      setWasmFunc(wasm);
  }

  useEffect(() => {
    getAllFunction().then(r => r);
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>1 + 1 = {wasmFunc.add(1,2)}</p>
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
