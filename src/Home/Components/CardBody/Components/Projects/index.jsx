import {
  DivimgBora,
  DivimgFacul,
  DivimgPlaca,
  DivimgModa,
  Project,
  Project_base,
} from ".";
import ImgBora from "./img/BoraJunto.png";
import ImgModa from "./img/ModaLoja.png";
import ImgPlaca from "./img/PlacaConverter.png";
import ImgFacul from "./img/ProjetoFacul.png";

export const Projects = () => {
  return (
    <Project_base>
      <Project>
        <DivimgBora>
            <h4>Bora La </h4>
          <a href="https://web-two-mu.vercel.app" target="_blank">
            <img src={ImgBora} alt="" />
          </a>
          <p>Trabalho da faculdade, Utilizando o React, contendo o UseState, UseForm, HookForm, Yup e RouterDom. </p>
        </DivimgBora>
        <DivimgModa>
        <h4>ModaLoja.com</h4>
          <a href="https://site-moda.vercel.app" target="_blank">
            <img src={ImgModa} alt="" />
          </a>
          <p>Trabalho da faculdade, Utilizando o React, RouterDom </p>
        </DivimgModa>
        <DivimgPlaca>
        <h4>Conversao para placa mercosul</h4>
          <a href="https://placa-gules.vercel.app" target="_blank">
            <img src={ImgPlaca} alt="" />
          </a>
          <p>Converter placa modelo antigo para modelo mercosul utilizando REACT . Utilizando Api</p>
        </DivimgPlaca>
        <DivimgFacul>
        <h4>Fucinhos</h4>
          <a href="https://primero-projeto-facul.vercel.app" target="_blank">
            <img src={ImgFacul} alt="" />
          </a>
          <p>Primeiro trabalho feito da faculdade, utilizando apenas HTML E CSS</p>
        </DivimgFacul>
      </Project>
    </Project_base>
  );
};
