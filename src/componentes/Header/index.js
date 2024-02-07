import EscolhaNovamente from "../EscolhaNovamente"
import OpcoesHeader from "../OpcoesHeader"
import styled from 'styled-components'
import { Link } from "react-router-dom"

const HeaderContainer = styled.header`
@font-face {
    font-family: Montserrat;
    src: url(../../fontes/Montserrat/Montserrat-VariableFont_wght.ttf);
  }

    width: 100vw;
    display: flex;
    justify-content: center;
    font-family: Montserrat;
    font-size: 20px;
`

function Header() {
    return (
        <HeaderContainer>
            <Link to="/">
                <EscolhaNovamente/>
            </Link>
            <OpcoesHeader/>
        </HeaderContainer>
    )
}

export default Header