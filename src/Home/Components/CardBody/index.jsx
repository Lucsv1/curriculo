import { Body_Base, Body } from "."
import { Knowledge } from "./Components/Knowledge/index.jsx"
import { Projects } from "./Components/Projects/index.jsx"

export const CardBody = () =>{
    return(
        <Body_Base>
            <Body>
                <h3>Conhecimentos Avançados</h3>
                <Knowledge/>
                <h3>Meus projetos</h3>
                <Projects/>
            </Body>
        </Body_Base>
    )
}