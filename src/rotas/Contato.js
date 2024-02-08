import './Home.css';
import TituloDaPagina from '../componentes/TituloDaPagina';
import Contatos from '../componentes/Contato'
import Line from '../componentes/Line';
import Header from '../componentes/Header';
import Footer from '../componentes/Footer';
import styled from 'styled-components';

const SiteContainer = styled.div`
  width: 100vw;
  height: 100vh;
`

function Home() {
  return (
    <SiteContainer>
        <Header />
        <TituloDaPagina className='titulo'>Contato</TituloDaPagina>
        <Line />
        <Contatos />
        <Footer />
    </SiteContainer>
  );
}

export default Home;