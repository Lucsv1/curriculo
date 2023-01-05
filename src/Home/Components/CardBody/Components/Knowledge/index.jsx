import { Know, Know_Base } from ".";
import Js from './img/js.png'
import Html from './img/html.png'
import Css from './img/css-3.png'
import Atom from './img/atom.png'

export const Knowledge = () => {
  return (
    <Know_Base>
      <Know>
        <img src={Js} alt="Js" />*
        <img src={Html} alt="Html" />
        <img src={Css} alt="Css" />
        <img src={Atom} alt="Atom" />
      </Know>
    </Know_Base>
  );
};
