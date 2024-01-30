import './Home.css';
import FotoDePerfil from '../componentes/FotoDePerfil'
import TextoSobre from '../componentes/TextoSobre'
import Header from '../componentes/Header';
import styled from 'styled-components';
import TituloDaPagina from '../componentes/TituloDaPagina';

const SiteContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #FFF47E;
  display: flex;
  flex-direction: column;
  align-items: center;
`


function Home() {
  return (
    <SiteContainer>
      <Header />
      <TituloDaPagina>Sobre</TituloDaPagina>
      <FotoDePerfil></FotoDePerfil>
      <TextoSobre></TextoSobre>
    </SiteContainer>
  );
}

export default Home;