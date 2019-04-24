import React from 'react';
import logo from './logo.svg';
import './App.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        </p>
        <h1 className="App-link">
          Learn React
        </h1>
      </header>
      <button onClick={()=>alert('Hi')}>点我</button>  
    </div>
  );
}

export default App;
