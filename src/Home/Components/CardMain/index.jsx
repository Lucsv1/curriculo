import { Card_Base, Card, Text } from "./index";

export const CardMain = () => {
  return (
    <Card_Base>
      <Card>
        <img src="https://github.com/lucsv1.png" alt="" />
        <Text>
          <h2>Sobre Mim</h2>
          <p>
            Olá, me chamo Lucas Vincius, tenho 18 anos e atualmente estou
            cursando <span>Analise e Desenvolvimento de Sistemas</span> na FIAP.
            Curso esta área pois tenho muita curiosidade em descobrir coisas
            novas sobre a programação, meu foco nessa área, é a parte do
            FRONT-END, quero me especializar nisso, pois tenho mais facilidade
            com desenvolvimento web{" "}
          </p>
        </Text>
      </Card>
    </Card_Base>
  );
};
