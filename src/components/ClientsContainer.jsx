import style from "./../styles/ClientsContainer.module.css";
import emilyImg from "../assets/images/image-emily.jpg";
import thomasImg from "../assets/images/image-thomas.jpg";
import jennieImg from "../assets/images/image-jennie.jpg";
import { Client } from "./Client";

export const ClientsContainer = () => {
  return (
    <section className={style.section}>
      <div className={style.container}>
        <h2 className={style.title}>CLIENT TESTIMONIALS</h2>
        <div className={style.gridContainer}>
          <Client
            urlImage={emilyImg}
            username={"Emily R."}
            description={
              "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
            }
            ocupation={"Marketing Director"}
          />
          <Client
            urlImage={thomasImg}
            username={"Thomas S."}
            description={
              "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience."
            }
            ocupation={"Chief Operating Officer"}
          />
          <Client
            urlImage={jennieImg}
            username={"Jennie F."}
            description={
              "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
            }
            ocupation={"Business Owner"}
          />
        </div>
      </div>
    </section>
  );
};
