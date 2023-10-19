import { brands } from '../data/brands'
import style from '../stayles/partners.module.css'

const Partners = ()=>{
    return(
        <div className={style.partners}>
            <div className='sm:container sm:mx-auto px-4'>
            <h2 className='title'>Партнеры</h2>
            <div className='grid grid-cols-4 gap-3'>
                {
                    brands.map((item, index)=>{
                        return <div className={style.brand} key={index}><img src={item.name} /></div>
                    })
                }
            </div>
        </div>
        </div>
    )
}

export default Partners