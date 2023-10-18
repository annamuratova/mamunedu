import { Icon } from '@iconify/react';
import { cards } from '../data/cards'
import style from '../stayles/services.module.css'

const Services = ()=>{
    return(
        <div className="sm:container sm:mx-auto px-4 py-9">
            <h2 className='title'>Интерактивные услуги</h2>
            <div className='grid grid-cols-4 gap-2'>
                {cards.map(item =>{
                    return <div className='rounded bg-gray-50 text-center py-9 px-5'>
                        <div className={style.img}><Icon icon={item.icon} width={35}/></div>
                        <b className={style.text}>{item.name}</b>
                        </div>
                })}
            </div>
        </div>
    )
}

export default Services