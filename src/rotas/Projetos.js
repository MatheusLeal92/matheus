import './Home.css';
import TituloDaPagina from '../componentes/TituloDaPagina';
import Header from '../componentes/Header';
import styled from 'styled-components';

const SiteContainer = styled.div`
  width: 100vw;
  height: 100vh;
`

function Home() {
  return (
    <SiteContainer>
        <Header />
        <TituloDaPagina className='titulo'>Projetos</TituloDaPagina>
    </SiteContainer>
  );
}

export default Home;