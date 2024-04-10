import style from "../styles/Client.module.css";
export const Client = ({ urlImage, username, description, ocupation }) => {
  return (
    <article className={style.card}>
      <figure className={style.figure}>
        <img src={urlImage} alt="userImage" className={style.img} />
      </figure>
      <p className={style.paragraph}>{description}</p>
      <div className={style.texts}>
        <h3 className={style.name}>{username}</h3>
        <span className={style.work}>{ocupation}</span>
      </div>
    </article>
  );
};
