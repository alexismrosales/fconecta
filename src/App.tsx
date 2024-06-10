import { BrowserRouter, Routes, Route } from 'react-router-dom';

import React from 'react'
import Header from './components/header/';
import HomePage from './pages/homePage/'
import Footer from './components/footer/';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
