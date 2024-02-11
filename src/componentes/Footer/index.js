import styled from 'styled-components'
import WhatsAppLogo from '../RedesSociais/whatsLogo'
import LinkedinLogo from '../RedesSociais/linkedinLogo'
import GitHubLogo from '../RedesSociais/githubLogo'
import './estilo.css'

const FooterContainer = styled.footer`
@font-face {
    font-family: Montserrat;
    src: url(../../fontes/Montserrat/Montserrat-VariableFont_wght.ttf);
  }

    width: 100vw;
    height: 5vh;
    display: flex;
    justify-content: right;
    font-family: Montserrat;
    font-size: 20px;
    position: absolute;
    bottom: 0;

    
    .Logo {
        height: 5vh;
        margin: 0;
    }

`

const Contato = styled.a`
    margin-right:1vw;
`

function Footer() {
    return (
        <FooterContainer>
            <Contato href="https://wa.me/5548988778269" target="_blank">
                <WhatsAppLogo />
            </Contato>
            <Contato href="https://www.linkedin.com/in/matheus-amaral-leal/" target="_blank">
                <LinkedinLogo />
            </Contato>
            <Contato href="https://github.com/MatheusLeal92" target="_blank">
                <GitHubLogo />
            </Contato>
        </FooterContainer>
    )
}

export default Footer