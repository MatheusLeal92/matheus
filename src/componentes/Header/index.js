import EscolhaNovamente from "../EscolhaNovamente"
import OpcoesHeader from "../OpcoesHeader"
import styled from 'styled-components'

const HeaderContainer = styled.header`
@font-face {
    font-family: Montserrat;
    src: url(../../fontes/Montserrat/Montserrat-VariableFont_wght.ttf);
  }

    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Montserrat;

    @media only screen and (max-width: 787px) {
        display: block;

        ul {
            margin-block-start: 0;
            display: flex;
            justify-content: center;
            padding: 0;
        }
      }
`

function Header() {
    return (
        <HeaderContainer>
                <EscolhaNovamente/>
            <OpcoesHeader/>
        </HeaderContainer>
    )
}

export default Header