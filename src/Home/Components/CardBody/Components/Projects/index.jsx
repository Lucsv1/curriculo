import { Project, Project_base } from ".";
import ImgBora from './img/BoraJunto.png'
import ImgModa from './img/ModaLoja.png'
import ImgPlaca from './img/PlacaConverter.png'
import ImgFacul from './img/ProjetoFacul.png'

export const Projects = () => {
  return (
    <Project_base>
      <Project>
        <a href="https://web-two-mu.vercel.app" target='_blank'>
          <img src={ImgBora} alt="" />
        </a>
        <a href="https://site-moda.vercel.app" target='_blank'>
          <img src={ImgModa} alt="" />
        </a>
        <a href="https://placa-gules.vercel.app" target='_blank'>
          <img src={ImgPlaca} alt="" />
        </a>
        <a href="https://primero-projeto-facul.vercel.app" target='_blank'>
          <img src={ImgFacul} alt="" />
        </a>
      </Project>
    </Project_base>
  );
};
