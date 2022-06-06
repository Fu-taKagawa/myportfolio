import './App.css';
import React from "react"
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Top from './page/Top';
import About from './page/About';
import Works from './page/Works';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Top />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Works" element={<Works />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
