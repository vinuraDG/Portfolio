import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";


const App = () => {
  return(
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
      <Footer/>
     

    </div>
  )
}

export default App