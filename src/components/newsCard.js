import style from '../stayles/newsCard.module.css'

const NewsCard = ()=>{
    return (
        <div className={style.card}>
            <img src="images/new.png" />
            <div className={style.cardText}>
                <span>Октябрь 12, 2023</span>
                    <p>В Университете Маъмуна прошел заключительный этап конкурса среди студентов «Самый читающий студент».</p>
            </div>
        </div>
    )
}


export default NewsCard