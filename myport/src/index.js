import React from 'react';
import { createRoot } from "react-dom/client";
import './index.css';
import App from './App';


import "./component/header/Header.css";
import "./css/About.css"
import "./css/Top.css"
import "./component/text.css"

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);