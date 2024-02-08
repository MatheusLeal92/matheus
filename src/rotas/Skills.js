import './Home.css';
import TituloDaPagina from '../componentes/TituloDaPagina';
import Line from '../componentes/Line';
import Header from '../componentes/Header';
import Footer from '../componentes/Footer';
import Skills from '../componentes/Skills'
import styled from 'styled-components';

const SiteContainer = styled.div`
  width: 100vw;
  height: 100vh;
`

function Home() {
  return (
    <SiteContainer>
        <Header />
        <TituloDaPagina className='titulo'>Skills</TituloDaPagina>
        <Line />
        <Skills></Skills>
        <Footer />
    </SiteContainer>
  );
}

export default Home;