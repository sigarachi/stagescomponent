import React from 'react';
import Componentsbuilder from './components/ComponentsBuilder/ComponentsBuilder';
import input from './data/input.json'

function App() {
  return (
    <div className="App">
      <Componentsbuilder input={input} />
    </div>
  );
  
}

export default App;
