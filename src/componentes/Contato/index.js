import WhatsAppLogo from '../../imagens/whatsapp.svg'
import LinkedinLogo from '../../imagens/linkedin.svg'
import GithubLogo from '../../imagens/github.svg'
import EmailLogo from '../../imagens/email.svg'
import styled from 'styled-components';

const ContatosContainer = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
`

const ContatosLogo = styled.img`
  height: 10vh;
  margin: 0 2vw;
`

const Contato = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const ContatosTexto = styled.p`
    color: #A16B2F;
`

function Contatos() {
    return (

        <ContatosContainer>
        <Contato>
          <ContatosLogo
            src={WhatsAppLogo}
            alt='WhatsApp Logo'
        
            />
            <ContatosTexto>(48) 98877-8269</ContatosTexto>
        </Contato>
        <Contato>
            <ContatosLogo
                src={LinkedinLogo}
                alt='Linkedin Logo'
            />
            <ContatosTexto>/matheus-amaral-leal</ContatosTexto>
        </Contato>
        <Contato>
            <ContatosLogo
                src={GithubLogo}
                alt='Github Logo'
            />
            <ContatosTexto>/MatheusLeal92</ContatosTexto>
        </Contato>
        <Contato>
            <ContatosLogo
                src={EmailLogo}
                alt='Email Logo'
            />
            <ContatosTexto>math.leal14@gmail.com</ContatosTexto>
        </Contato>
        </ContatosContainer>
    )
}

export default Contatos