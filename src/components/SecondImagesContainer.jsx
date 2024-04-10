import style from "../styles/SecondImagesContainer.module.css";
import bottles from "../assets/images/desktop/image-gallery-milkbottles.jpg";
import orange from "../assets/images/desktop/image-gallery-orange.jpg";
import cone from "../assets/images/desktop/image-gallery-cone.jpg";
import sugar from "../assets/images/desktop/image-gallery-sugarcubes.jpg";

export const SecondImagesContainer = () => {
  return (
    <section className={style.gridSecondImages}>
      <figure className={style.item}>
        <img src={bottles} alt="botellas" />
      </figure>
      <figure className={style.item}>
        <img src={orange} alt="naranja" />
      </figure>
      <figure className={style.item}>
        <img src={cone} alt="helado" />
      </figure>
      <figure className={style.item}>
        <img src={sugar} alt="azucar" />
      </figure>
    </section>
  );
};
