import React from "react";
import Header from "./components/header";

import Footer from "./components/footer";
import Home from "./pages/home";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/aboutPage";
import NewsPage from "./pages/newsPage";

function App() {
  return(
    <div>
      <Header />
      <Routes>
      {/* <Route path="/" element = {<Home />} /> */}
      <Route path="aboutPage" element={ <AboutPage/>} />
      <Route path="newsPage"  element={ <NewsPage />} /> 
      </Routes>
      <Footer />
    </div>
  )
  }   
 
  
  export default App