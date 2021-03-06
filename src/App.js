import React from 'react';
import logo from './logo.svg';
import './App.css';
import CheckboxWithLabel from './componentes/CheckboxWithLabel';
import Counter from './componentes/Counter';

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form>
            <label>Esto anda
              <CheckboxWithLabel/>
            </label>
              <Counter/>
        </form>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
