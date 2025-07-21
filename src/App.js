// App.js
import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Randomizer from './components/Randomizer';
import StringRandomizer from './components/StringRandomizer';
import Decoder from './components/Decoder';
import './App.css';

function App() {
 return (
 <BrowserRouter>
 <div className="app">
 <nav className="navbar">
 <ul className="nav-links">
 <li>
 <Link to="/" className="nav-link">
 Главная
 </Link>
 </li>
 <li>
 <Link to="/randomizer" className="nav-link">
 Генератор чисел
 </Link>
 </li>
 <li>
 <Link to="/string-randomizer" className="nav-link">
 Генератор строк
 </Link>
 </li>
 <li>
 <Link to="/decoder" className="nav-link">
 Кодировщик Base64
 </Link>
 </li>
 </ul>
 </nav>
 
 <Routes>
 <Route path="/" element={
 <>
 <h1>Главная страница</h1>
 <div className="main-content">
 <Randomizer />
 <hr />
 <StringRandomizer />
 </div>
 </>
 } />
 <Route path="/randomizer" element={<Randomizer />} />
 <Route path="/string-randomizer" element={<StringRandomizer />} />
 <Route path="/decoder" element={<Decoder />} />
 </Routes>
 </div>
 </BrowserRouter>
 );
}

export default App;
