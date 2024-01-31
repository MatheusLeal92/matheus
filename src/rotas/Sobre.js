import './Home.css';
import FotoDePerfil from '../componentes/FotoDePerfil'
import TextoSobre from '../componentes/TextoSobre'
import Header from '../componentes/Header';
import styled from 'styled-components';
import TituloDaPagina from '../componentes/TituloDaPagina';

const SiteContainer = styled.div`
  width: 100vw;
  height: 100vh;
  align-items: center;
`
const SobreContainer = styled.div`
  
  display: flex;
  align-items: center;
  justify-content: center;
`

function Home() {
  return (
    <SiteContainer>
      <Header />
      <TituloDaPagina>Sobre</TituloDaPagina>
      <SobreContainer>
        <FotoDePerfil></FotoDePerfil>
        <TextoSobre></TextoSobre>
      </SobreContainer>
    </SiteContainer>
  );
}

export default Home;