import './App.css';
import React from 'react'; 
import { useState } from 'react';
import { Navbarr, Logi,Txtform } from './components/Navbar';
import About from './components/about';
function App() {
  const [mode, setmode] = useState('light');
  return (
    <>
        <div className='App-header'>
          <Logi start="REACT CONVERTER APP" />
          {/* <img src="{logoimg}" alt="" /> */}
          </div>



        <div className='navi'>
          <Navbarr title="TextUtils"    abttext="About us" />
        </div>

      <div className='mid'>
          <Txtform />
        </div>


<About/>

    </>
  );
}
export default App;
