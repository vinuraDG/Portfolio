import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";

const App = () => {
  return(
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
      <About/>

    </div>
  )
}

export default App