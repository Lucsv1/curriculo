import { ImgAtom, ImgCss, ImgHtml, ImgJs, Know, Know_Base } from ".";
import Js from "./img/js.png";
import Html from "./img/html.png";
import Css from "./img/css-3.png";
import Atom from "./img/atom.png";

export const Knowledge = () => {
  return (
    <Know_Base>
      <Know>
        <ImgJs>
          <img src={Js} alt="Js" />
          <h4>JavaScript: Meu conhecimento sobre JS é Intermediario, Tive mais facilidade utilizando no React</h4>
        </ImgJs>
        <ImgHtml>
          <img src={Html} alt="Html" />
          <h4>Html: Meu conhecimento sobre HTML é avançado, ja tenho 4 anos de experiencia</h4>
        </ImgHtml>
        <ImgCss>
          <img src={Css} alt="Css" />
          <h4>CSS: Meu conhecimento sobre CSS é avançado, ja tenho 4 anos de experiencia</h4>
        </ImgCss>
        <ImgAtom>
          <img src={Atom} alt="Atom" />
          <h4>REACT: Meu conhecimento sobre REACT é Intermediario, Conhecimento em components e um pouco de API</h4>
        </ImgAtom>
      </Know>
    </Know_Base>
  );
};
