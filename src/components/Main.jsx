import style from "../styles/Main.module.css";
import egg from "../assets/images/desktop/image-transform.jpg";
import cup from "../assets/images/desktop/image-stand-out.jpg";
import cherry from "../assets/images/desktop/image-graphic-design.jpg"
import orange from "../assets/images/desktop/image-photography.jpg";
import { InfoComponent } from "./InfoComponent";
import { FruitComponent } from "./FruitComponent";



export const Main = () => {
  return (
    <main className={style.main}>
      <InfoComponent
        title={"Transform your brand"}
        paragraph={
          "We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you"
        }
        bg={'hsl(51, 100%, 49%)'}
      />
      <figure className={style.figure}>
        <img src={egg} alt="egg" className={style.img} />
      </figure>
      <InfoComponent
        title={"Stand out to the right audience"}
        paragraph={
          "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places."
        }
        bg={'hsl(7, 99%, 70%)'}
      />
      <figure className={style.figure}>
        <img src={cup} alt="cup" className={style.img} />
      </figure>
      
      <FruitComponent
        img={cherry}
        title={'Graphic Design'}
        paragraph={'Greate design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients attention.'}
        color={'hsl(167, 40%, 24%)'}
      />
      <FruitComponent
        img={orange}
        title={'Photography'}
        paragraph={'Increase your credibility by getting the most stunning, high-quality photos that improve your business image.'}
        color={'hsl(198, 62%, 26%)'}
      />

    </main>
  );
};
