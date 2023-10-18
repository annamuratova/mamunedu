import styles from '../stayles/main.module.css'

function Main(){
    return(
       <div className={styles.main}>
         <div className='sm:container sm:mx-auto px-4 flex'>
            <div className={styles.text}>
                <h1 className={styles.title}>Высочайшее качество и возможности образованияв нашем университете.</h1>
                <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.</p>
                <button>В деталях</button>
            </div>
          <div className={styles.images} >
            <img className={styles.photo1} src="images/photo1.png"/>
            <img className={styles.photo2} src="images/photo2.png"/>
            <img className={styles.photo3} src="images/photos3.png"/>
            <img src="images/vector.png"/>
            </div>  
        </div>
        
       </div>
    )
}

export default Main