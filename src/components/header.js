import {header} from '../data/header'
import {menu} from '../data/menu'
import {icons} from '../data/icons'
import styles from '../stayles/header.module.css'

const Header = ()=>{
    return(
        <header>
            <div className={styles.header_top}>
                <div className='sm:container sm:mx-auto px-4 flex'>
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
            <nav className='sm:container sm:mx-auto px-4 flex'>
                <div className={styles.logo}>
                    <img src='images/logo.png' alt=''/>
                    <span className=''>Университет Мамуна
                        Негосударственное образовательное учреждение
                    </span>
                </div>
                <ul className={styles.navbar}>
                    {
                        menu.map((item)=>{
                            return <li><a href=''>{item.name}</a></li>
                        })
                    }
                    <li><img src='images/search.png' alt=''></img></li>
                </ul>
                
            </nav>
        </header>
    )
}

export default Header