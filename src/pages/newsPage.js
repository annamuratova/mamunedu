import { Link } from "react-router-dom"
import NewsCard from "../components/newsCard";
import style from "../stayles/newsPage.module.css"
import { useState } from "react";


const NewsPage = ()=>{
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const btns = [1, 2, 3, "...", 10];
    const [active, setActive] = useState(btns[0]);
    function handleClick(index) {
        setActive(index);
        console.log(active);
    }
    return (
        <div className={style.newsPage}>
            <div className='md:container md:mx-auto px-4'>
            <div className={style.links}><Link to="#">Главный</Link> /
                <Link to="#">Ректорат</Link> /
                <Link to="#">Новости</Link>
            </div>
              <h2 className="title">Новост</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                {
                    cards.map((item)=>{
                        return <NewsCard key={item}/>
                    })
                }    
            </div>
                <div className={style.pagination}>
                <button className={style.control}><img src="images/arrow.png" /></button>
                {
                    btns.map((index)=>{
                        return <button key={index} onClick={()=>handleClick(index)} style={ active === index ? {backgroundColor: "blue", color: "white"} : {backgroundColor: "white"}}>{index}</button>
                    })
                }
                <button className={style.control}><img src="images/arrow.png" className={style.next}/></button>
                </div>  
            </div>
        </div>
    )
}


export default NewsPage