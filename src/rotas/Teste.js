import './Home.css';
import './Teste.css';
import TituloDaPagina from '../componentes/TituloDaPagina';
import Header from '../componentes/Header';
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
        <TituloDaPagina className='testeCor'>Teste</TituloDaPagina>
    </SiteContainer>
  );
}

export default Home;