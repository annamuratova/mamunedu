
import { useRef } from 'react'

const Question = ({isActive, onToogle})=>{
    const contentEl = useRef();
    return(
        <div className='questionWrap'>
            <div className='question' onClick={onToogle}>
                <p>Сколько лет обучаются студенты заочного отделения?</p>
                <svg className={isActive ? 'active' : ''} viewBox="0 0 320 512" width="100" title="angle-down">
        <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
        </svg>   
            </div>
            <div className='answer' ref={contentEl} style={ isActive ? { height: contentEl.current.scrollHeight }
      : { height: "0px" }}>
                <p>Студенты заочного отделения обучаются 5 лет</p>
            </div>
        </div>
    )
}

export default Question