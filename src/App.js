import React from 'react';
import StagesComponent from './components/StagesComponent/StagesComponent';
import stages from './data/stages.json'

function App() {
  
  return (
    <div className="App">
      <StagesComponent props={stages.stages} />
    </div>
  );
  
}

export default App;
