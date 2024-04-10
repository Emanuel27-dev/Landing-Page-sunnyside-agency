import style from "../styles/FruitComponent.module.css";

export const FruitComponent = ({ img, title, paragraph, color }) => {
  return (
    <article
      className={style.article}
      style={{
        backgroundImage: `url(${img})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        color: color,
      }}
    >
      <h3 className={style.title}>{title}</h3>
      <p className={style.paragraph}>{paragraph}</p>
    </article>
  );
};
