import styled from 'styled-components'

const FooterContainer = styled.footer`
@font-face {
    font-family: Montserrat;
    src: url(../../fontes/Montserrat/Montserrat-VariableFont_wght.ttf);
  }

    width: 100vw;
    height: 5vh;
    display: flex;
    justify-content: center;
    font-family: Montserrat;
    font-size: 20px;
    position: absolute;
    bottom: 0;
`

function Footer() {
    return (
        <FooterContainer>
        </FooterContainer>
    )
}

export default Footer