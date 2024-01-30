import './Home.css';
import TextoSobre from '../componentes/TextoSobre'
import Header from '../componentes/Header';
import TituloDaPagina from '../componentes/TituloDaPagina'
import styled from 'styled-components';

const SiteContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #FFF47E;
`

function Home() {
  return (
    <SiteContainer>
        <Header />
        <TituloDaPagina>Skills</TituloDaPagina>
        <TextoSobre></TextoSobre>
    </SiteContainer>
  );
}

export default Home;