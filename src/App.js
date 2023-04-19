import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Loadcountry></Loadcountry>
      
    </div>
  );
}

function Loadcountry(){
  const [countries, setCountries] =useState([])
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data => setCountries(data))
  },[])
  return (
    <div>
      <h1>Visit All country over the World!!!</h1>
      <h3>{countries.length}</h3>
    </div>
  )
}

export default App;
