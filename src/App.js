import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { useState } from 'react';

import Resumegenerator from './Resumegenerator.js';


function App() {
  const [value, setvalue] = useState()
  const [cont, setcont] = useState()

  return (<React.StrictMode>


    <Resumegenerator />
  </React.StrictMode>)
}

export default App;