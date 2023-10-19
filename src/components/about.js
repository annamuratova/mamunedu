import {about} from '../data/about'
import style from '../stayles/about.module.css'

const About = ()=>{
    return(
        <div className={style.about}>
            <div className="sm:container sm:mx-auto px-4">
                <h1>Об университете</h1>
                <p>Основателем университета Мамун является Нуржонов Арслонбек Атаназарович. Университет работает на основании лицензий, выданных инспекцией по контролю качества образования при Кабинете министров 12 апреля 2021 года под регистрационным номером №19 и 14 мая 2022 года под регистрационным номером №027406. Университет Мамун имеет 7 направлений обучения:</p>
                <div className='grid grid-cols-4 gap-3'>
                    {
                        about.map((el, index)=>{
                            return <div key={index} className='flex'>
                                <b>{el.number}</b>
                                <span>{el.text}</span>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default About