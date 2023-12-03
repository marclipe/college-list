import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css'
import { Search } from './pages/Search/Search';
import { Home } from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='/search' element={<Search/>} />
          {/* <Route path='*' element={}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
