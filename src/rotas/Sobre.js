import './Home.css';
import TituloDaPagina from '../componentes/TituloDaPagina';
import FotoDePerfil from '../componentes/FotoDePerfil'
import TextoSobre from '../componentes/TextoSobre'
import Header from '../componentes/Header';
import styled from 'styled-components';


const SiteContainer = styled.div`
  width: 100vw;
  height: 100vh;
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
      <TituloDaPagina className='titulo'>Sobre</TituloDaPagina>
      <SobreContainer>
        <FotoDePerfil></FotoDePerfil>
        <TextoSobre></TextoSobre>
      </SobreContainer>
    </SiteContainer>
  );
}

export default Home;