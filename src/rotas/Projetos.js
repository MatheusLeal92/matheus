import './Home.css';
import TituloDaPagina from '../componentes/TituloDaPagina';
import Line from '../componentes/Line';
import Header from '../componentes/Header';
import Footer from '../componentes/Footer';
import styled from 'styled-components';
import Projetos from '../componentes/Projetos';

const SiteContainer = styled.div`
  width: 100vw;
  height: 100vh;
`

function Home() {
  return (
    <SiteContainer>
        <Header />
        <TituloDaPagina className='titulo'>Projetos</TituloDaPagina>
        <Line />
        <Projetos />
        <Footer />
    </SiteContainer>
  );
}

export default Home;