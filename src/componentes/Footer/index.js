import styled from 'styled-components'
import WhatsAppLogo from '../RedesSociais/whatsLogo'
import LinkedinLogo from '../RedesSociais/linkedinLogo'
import GitHubLogo from '../RedesSociais/githubLogo'
import './estilo.css'
import Bush from '../Bush'

const FooterContainer = styled.footer`
    width: 100vw;
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 0;
    
`

const Contato = styled.a`
    margin-right:1vw;
`

const ContatosFooter = styled.div`
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
    z-index: 3;
    
    .Logo {
        height: 5vh;
        margin: 0;
    }
`

function Footer() {
    return (
        <FooterContainer>
            <Bush />
            <ContatosFooter className="contatosFooter" >
                <Contato href="https://wa.me/5548988778269" target="_blank">
                    <WhatsAppLogo />
                </Contato>
                <Contato href="https://www.linkedin.com/in/matheus-amaral-leal/" target="_blank">
                    <LinkedinLogo />
                </Contato>
                <Contato href="https://github.com/MatheusLeal92" target="_blank">
                    <GitHubLogo />
                </Contato>
            </ContatosFooter>
        </FooterContainer>
    )
}

export default Footer