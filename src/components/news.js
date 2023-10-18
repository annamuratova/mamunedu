import style from '../stayles/news.module.css'

const News = ()=>{
    const news = [1, 2, 3];
    return(
        <div className='sm:container sm:mx-auto px-4'>
            <div className='flex'>
                <h2 className="title">Последние новости</h2>
                <a href='' className={style.newsLink}>Все новости ></a>
            </div>
            <button>Новости</button>
            <button>Объявления</button>
            <div className='flex py-5'>
                <div className={style.banner}><img src='images/banner.png'/></div>
                <div className={style.news}>
                    {
                        news.map(()=>{
                            return <div className='flex'>
                                <img src='images/new.png'/>
                                <div className={style.newsText}>
                                    <span>Октябрь 12, 2023</span>
                                    <p>В Университете Маъмуна прошел заключительный этап конкурса среди студентов «Самый читающий студент».</p>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default News