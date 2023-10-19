import React from "react";
import Header from "./components/header";
import Main from "./components/main";
import Services from "./components/services";
import News from "./components/news";
import About from "./components/about";
import Partners from "./components/partner";
import Questions from "./components/questions";
import Slider from "./components/slider";

function App() {
  return(
    <div>
      <Header />
      <Main />
      <Services />
      <News />
      <About />
      <Slider />
      <Partners />
      <Questions />

    </div>
  )
  }   
 
  
  export default App