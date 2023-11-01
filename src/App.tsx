import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css'
import { Search } from './pages/Search/Search';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route index element={}/> */}
          <Route path='/search' element={<Search/>} />
          {/* <Route path='*' element={}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
