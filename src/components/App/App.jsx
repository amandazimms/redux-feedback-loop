import React from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Feeling/>}></Route>
            <Route path='/understanding' element={<Understanding/>}></Route>
            <Route path='/support' element={<Support/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
