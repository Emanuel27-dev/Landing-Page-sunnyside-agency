import style from "../styles/Footer.module.css";
import { FacebookIcon } from "./icons-components/FacebookIcon";
import { InstagramIcon } from "./icons-components/InstagramIcon";
import { TwitterIcon } from "./icons-components/TwitterIcon";
import { PinterestIcon } from "./icons-components/PinterestIcon";
import { LogoIcon } from "./icons-components/LogoIcon";

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.header}>
          <LogoIcon color={'#2C7566'} />
          <div className={style.texts}>
            <p>About</p>
            <p>Services</p>
            <p>Projects</p>
          </div>
        </div>
        <div className={style.icons}>
          <FacebookIcon clase={style.icon}/>
          <InstagramIcon clase={style.icon}/>
          <TwitterIcon clase={style.icon}/>
          <PinterestIcon clase={style.icon}/>
        </div>
      </div>
    </footer>
  );
};
