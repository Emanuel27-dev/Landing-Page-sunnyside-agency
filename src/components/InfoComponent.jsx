import style from '../styles/InfoComponent.module.css'

export const InfoComponent = ({ title, paragraph,bg }) => {
    return (
        <article className={style.article}>
            <div className={style.container}>
                <h2 className={style.title}>{title}</h2>
                <p className={style.paragraph}>{paragraph}</p>
                <span className={style.span}>
                    <span className={style.spanText}>LEARN MORE</span>
                    <span className={style.spanChild} style={{
                        backgroundColor:bg
                    }}></span>
                </span>
            </div>
        </article>
    );
}