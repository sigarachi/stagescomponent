import React from 'react';
import StagesComponent from './components/StagesComponent/StagesComponent';
import input from './data/debug.json'

function App() {
  return (
    <div className="App">
      <StagesComponent props={{...input}} />
    </div>
  );
  
}

export default App;
