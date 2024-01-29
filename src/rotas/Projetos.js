import './Home.css';
import TextoSobreMim from '../componentes/TextoSobreMim'
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
        <TextoSobreMim></TextoSobreMim>
    </SiteContainer>
  );
}

export default Home;