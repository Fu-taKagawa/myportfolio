import './App.css';
import React from "react"
import { BrowserRouter, Routes,Route} from "react-router-dom";

import Top from './page/Top';
import About from './page/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Top />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
