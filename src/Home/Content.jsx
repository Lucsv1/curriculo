import { CardMain } from "./Components/CardMain/index.jsx"
import { Main_Base,Main } from "./StyledContent"
export const Content = () =>{
    return(
        <Main_Base>
            <Main>
                <h1>Meu curriculo</h1>
                <CardMain/>
            </Main>
        </Main_Base>
    )
}