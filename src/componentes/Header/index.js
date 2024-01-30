import EscolhaNovamente from "../EscolhaNovamente"
import OpcoesHeader from "../OpcoesHeader"
import styled from 'styled-components'
import { Link } from "react-router-dom"

const HeaderContainer = styled.header`
    width: 100vw;
    background-color: #93C3D9;
    display: flex;
    justify-content: center;
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