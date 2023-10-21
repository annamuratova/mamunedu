import style from '../stayles/slider.module.css'
import { useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation} from 'swiper/modules'
import 'swiper/css/navigation';
import 'swiper/css';



const Slider = ()=>{
   const slideItems = [1, 2, 3, 4, 5, 6, 7, 8]; 
    const [photo, setPhoto] = useState(false);
    return(
        <div className={style.carusel}>
        <div className="md:container md:mx-auto px-4">
            <h2 className="title">Галерея</h2>
            <div className={style.buttons}>
            <button className={photo === false ? 'btn active' : 'btn'} onClick={()=>setPhoto(false)}>Видео галерея</button>
            <button className={photo === true ? 'btn active' : 'btn'} onClick={()=> setPhoto(true)}>Фотогалерея</button>
            </div>
            <Swiper
            breakpoints={{
                500: {
                    slidesPerView: 2,
                },
              768: {
                slidesPerView: 4,
              }
            }}
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
           freeMode={true}
           navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >          
           {
            slideItems.map((index)=>{
                return  <SwiperSlide key={index}>
                <div>
                    <img src='images/slide.png'/>
                    <p className={style.slideText}>В Университете Маъмуна прошел заключительный этап конкурса среди студентов «Самый читающий студент».</p>
                </div>
                </SwiperSlide>
            })
           }  
          
        </Swiper>
        </div>
        </div>
    )
}

export default Slider