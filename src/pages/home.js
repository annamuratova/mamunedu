import Main from "../components/main";
import Services from "../components/services";
import News from "../components/news";
import About from "../components/about";
import Partners from "../components/partner";
import Questions from "../components/questions";
import Slider from "../components/slider";

const Home = ()=>{
    return (
        <div>
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

export default Home