import Question from "./question";
import { useState } from "react";



const Questions = ()=>{
    const faqs = [1, 2, 3, 4, 5, 6];
    const [click, setClick] = useState("0");
    function handleClick(index) {
        if(click === index){
            return setClick("0");
        }
        setClick(index);
    }
    
    return(
        <div className='questions'>
            <div className="sm:container sm:mx-auto px-4">
                <h2 className="title">Часто задаваемые вопросы</h2>
                <div className="grid grid-cols-2 gap-3">
                    {
                        faqs.map((index)=>{
                         return <Question  key={index} onToogle={()=>handleClick(index)} isActive={click === index} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Questions