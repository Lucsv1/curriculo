import { CardBody } from "./Components/CardBody/index.jsx"
import { CardMain } from "./Components/CardMain/index.jsx"
import { Main_Base,Main } from "."
export const Content = () =>{
    return(
        <Main_Base>
            <Main>
                <h1>Meu curriculo</h1>
                <CardMain/>
                <CardBody/>
            </Main>
        </Main_Base>
    )
}