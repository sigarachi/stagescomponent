import React from 'react';
import StagesComponent from './components/StagesComponent/StagesComponent';
import input from './data/test.json'

function App() {
  return (
    <div className="App">
      <StagesComponent props={{...input.input[0]}} />
      <StagesComponent props={{...input.input[1]}} />
    </div>
  );
  
}

export default App;
