import './Home.css';
import TituloDaPagina from '../componentes/TituloDaPagina';
import Line from '../componentes/Line';
import FotoDePerfil from '../componentes/FotoDePerfil'
import TextoSobre from '../componentes/TextoSobre'
import Header from '../componentes/Header';
import Footer from '../componentes/Footer';
import styled from 'styled-components';


const SiteContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
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
      <Line />
      <SobreContainer>
        <FotoDePerfil></FotoDePerfil>
        <TextoSobre></TextoSobre>
      </SobreContainer>
      <Footer />
    </SiteContainer>
  );
}

export default Home;