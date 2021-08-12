import React from 'react';

import './App.css';
import Row from './Row';

import requests from './requests';

function App() {
  return (
    <div className="App">
     <h1>HEYY</h1>
     <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
    </div>
  );
}

export default App;
