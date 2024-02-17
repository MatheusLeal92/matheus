import WhatsAppLogo from '../RedesSociais/whatsLogo'
import LinkedinLogo from '../RedesSociais/linkedinLogo'
import GitHubLogo from '../RedesSociais/githubLogo'
import EmailLogo from '../RedesSociais/emailLogo'
import styled from 'styled-components';


const ContatosContainer = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
`

const Contato = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
`


function Contatos() {
    return (

        <ContatosContainer className='fadeInDown'>
        <Contato href="https://wa.me/5548988778269" target="_blank">
            <WhatsAppLogo />
            <p>(48) 98877-8269</p>
        </Contato>
        <Contato href="https://www.linkedin.com/in/matheus-amaral-leal/" target="_blank">
            <LinkedinLogo />
            <p>/matheus-amaral-leal</p>
        </Contato>
        <Contato href="https://github.com/MatheusLeal92" target="_blank">
            <GitHubLogo />
            <p>/MatheusLeal92</p>
        </Contato>
        <Contato>
            <EmailLogo />
            <p>math.leal14@gmail.com</p>
        </Contato>
        </ContatosContainer>
    )
}

export default Contatos