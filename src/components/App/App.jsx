import React from 'react';
import axios from 'axios';
import './App.css';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <BrowserRouter>
        <Routes>
             {/* reminder that the Admin page should not be linked, only reachable by visiting /Admin in URL  */}
            <Route path='/' element={<Feeling/>}></Route>
            <Route path='/understanding' element={<Understanding/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
