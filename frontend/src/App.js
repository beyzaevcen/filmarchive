import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Add from "./pages/Add";
import Films from './pages/Films';
import { LoginSignup } from "./pages/loginsignup/LoginSignup";
import Update from "./pages/Update";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/films" element={<Films />} />
        <Route path="/add" element={<Add />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/" element={<LoginSignup />} />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
