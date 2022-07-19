import React from "react";
import { Route, Routes, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import NavBar from "./NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact={`$about}`} path="/about" element={<About />} />

        <Route exact="true" path="/login" element={<Login />} />
    
    
        <Route exact="true" path="/" element={<Home />} />
        
        
      </Routes>
    </div>
  );
}

export default App;