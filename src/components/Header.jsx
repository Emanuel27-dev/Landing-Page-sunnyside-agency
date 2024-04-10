import style from "../styles/Header.module.css";
import { LogoIcon } from "../components/icons-components/LogoIcon";
import { ArrowDownIcon } from "../components/icons-components/ArrowDownIcon";
import { HamburguerIcon } from "../components/icons-components/HamburguerIcon";
import imgHeader from "../assets/images/desktop/image-header.jpg";

export const Header = () => {
  return (
    <header
      className={style.header}
      style={{
        backgroundImage: `url('${imgHeader}')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className={style.container}>
        <nav className={style.nav}>
          <LogoIcon />
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <a href="#" className={style.button}>
              CONTACT
            </a>
          </ul>
          <figure className={style.hamburguer}>
            <HamburguerIcon />
          </figure>
        </nav>

        <h1 className={style.title}>WE ARE CREATIVES</h1>
        <figure className={style.arrow}>
          <ArrowDownIcon />
        </figure>
      </div>
    </header>
  );
};
