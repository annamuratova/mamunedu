import { footerLinks } from "../data/footer"
import { Icon } from '@iconify/react';
import style from '../stayles/footer.module.css'
import { Link } from "react-router-dom";


const Footer = ()=>{
    return(
        <footer className={style.footer}>
           <div className="md:container md:mx-auto px-4">
            <div className={style.flex}>
                <div className={style.footerLeft}>
                    <a href="" className="flex">
                    <img src="images/logo.png"/>
                    Университет 
                     Мамуна
                        Негосударственное образовательное учреждение
                    </a>
                    <p>При печати материалов или их распространении
                        необходимо указывать ссылку на официальный сайт общества</p>
                    <img src="images/image5.png"/>
                </div>
                <div className={style.footerLinks}>
                  <h3>Быстрые ссылки</h3>
                  <ul className="grid grid-cols-2">
                    {
                        footerLinks.map((link, index)=>{
                            return <li key={index}>
                                <Link to={link.src} >{link.link}</Link>
                            </li>
                        })
                    }    
                </ul>  
                </div>
                <div className={style.footerRight}>
                    <p><Icon icon="ion:location"/> г.Хива, ул.Болховуз, д. 2</p>
                    <p><Icon icon="carbon:phone-filled" /> (1.)+99877 2559090  - (2.) +99891 8726060</p>
                    <p><Icon icon="solar:letter-bold-duotone" /> г.Хива, ул.Болховуз, д. 2</p>
                </div>
                </div>
                <span>© Все права защищены 2021-2023</span>
            </div>
            
        </footer>
    )
}

export default Footer