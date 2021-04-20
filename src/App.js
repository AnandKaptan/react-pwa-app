import React from 'react';
import './App.css';

/* thisisasample */

function App() {
  const fruits = ['apple', 'mango', 'chikoo'];
  return (
    <div className='App'>
      <header className='App-header'>App Header</header>
      <ul>
        {fruits.map((f) => (
          <li>{f}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
