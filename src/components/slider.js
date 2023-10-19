import style from '../stayles/slider.module.css'
import { useState } from "react"



const Slider = ()=>{
    const [photo, setPhoto] = useState(false);
    return(
        <div className="sm:container sm:mx-auto px-4">
            <h2 className="title">Галерея</h2>
            <div className={style.buttons}>
            <button className={photo === false ? 'btn active' : 'btn'} onClick={()=>setPhoto(false)}>Видео галерея</button>
            <button className={photo === true ? 'btn active' : 'btn'} onClick={()=> setPhoto(true)}>Фотогалерея</button>
            </div>
        </div>
    )
}

export default Slider