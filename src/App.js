import React from 'react';
import "./css/home.css"
import Home from './layout/Home'
import {BrowserRouter} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Home/>
    </BrowserRouter>
      
   
  );
}

export default App;
