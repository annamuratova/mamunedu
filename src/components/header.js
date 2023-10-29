import {header} from '../data/header'
import {menu} from '../data/menu'
import {icons} from '../data/icons'
import styles from '../stayles/header.module.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = ()=>{
    const [open, setOpen] = useState(false);
    function opened(){
        if(open === false){
            setOpen(true);
        }else{
            setOpen(false)
        }
        console.log(open);
    }
    return(
        <header>
            <div className={styles.header_top}>
                <div className='md:container md:mx-auto px-4 flex'>
                    <div className={styles.icons}>
                        {
                            icons.map(el =>{
                                return <a href=''><img src={el.img}></img></a>
                            })
                        }
                    </div>
                    <ul className='flex'>
                    {
                        header.map(item =>{
                            return <li>
                                <img src={item.img}></img>
                                <span>{item.text}</span>
                            </li>
                        })
                    }
                    <li>
                        <img src='images/Frame.png'></img>
                        <select name=''>
                            <option value='russ' selected>Русский</option>
                            <option value='uzbek'>Узбек</option>
                        </select>
                    </li>
                    </ul>
                </div>
            </div>
            <nav className='md:container md:mx-auto px-4 flex'>
                <div className={styles.logo}>
                    <img src='images/logo.png' alt=''/>
                    <Link to="/">Университет Мамуна
                        Негосударственное образовательное учреждение
                    </Link>
                </div>
                <ul className={`navbar ${open ? 'open': ''}`}>
                    {
                        menu.map((item)=>{
                            return <li><Link to={item.link}>{item.name}</Link></li>
                        })
                    }
                    <li><img src='images/search.png' alt=''></img></li>
                </ul>
                <span className={styles.menuBurger} onClick={()=>opened()}></span>   
            </nav>
        </header>
    )
}

export default Header