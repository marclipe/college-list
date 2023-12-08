import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css'
import { Search } from './pages/Search/Search';
import { Home } from './pages/Home/Home';

import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Breadcrumbs } from './components/Breadcrumbs/Breadcrumbs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <Breadcrumbs />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/search" element={<Search />} />
            {/* <Route path='*' element={}/> */}
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
