// App.js
import React from 'react';
import Weather from './components/Weather';
import News from './components/News';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Personal Dashboard</h1>
      <div className="widgets">
        <Weather />
        <News />
      </div>
    </div>
  );
}

export default App;
