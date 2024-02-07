import './Home.css';
import TituloDaPagina from '../componentes/TituloDaPagina';
import Header from '../componentes/Header';
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
        <Skills></Skills>
    </SiteContainer>
  );
}

export default Home;