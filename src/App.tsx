import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Bank } from './components/bank/bank';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pagatodo Challenge</h1>
        <Bank/>
      </header>
    </div>
  );
}

export default App;
