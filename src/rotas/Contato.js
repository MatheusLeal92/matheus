import './Home.css';
import TituloDaPagina from '../componentes/TituloDaPagina';
import Contatos from '../componentes/Contato'
import Header from '../componentes/Header';
import styled from 'styled-components';

const SiteContainer = styled.div`
  width: 100vw;
  height: 100vh;
  font-size: 2.8vh;
  font-family: Montserrat;
`

function Home() {
  return (
    <SiteContainer>
        <Header />
        <TituloDaPagina className='titulo'>Contato</TituloDaPagina>
        <Contatos />
    </SiteContainer>
  );
}

export default Home;