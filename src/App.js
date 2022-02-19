import logo from './logo.svg';
import './App.scss';

import { useState } from 'react';
import { Button } from 'bootstrap';

function App() {
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
  <div className={`App bg-${theme}bg`}>
    <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
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
    <button onClick={() => themeToggler()}>Toggle Theme</button>
    </header>
  </div>
  );
}

export default App;
