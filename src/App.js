import React from "react";
import Header from "./components/header";

import Footer from "./components/footer";
import Home from "./pages/home";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/aboutPage";

function App() {
  return(
    <div>
      <Header />
      <Routes>
      <Route path="/" element = {<Home />} />
      <Route path="aboutPage" element={ <AboutPage/>} /> 
      </Routes>
      <Footer />
    </div>
  )
  }   
 
  
  export default App