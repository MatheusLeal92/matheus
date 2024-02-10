import styled from 'styled-components';
import { Link } from "react-router-dom"
import EscolhaNovamenteImagem from '../../imagens/escolha-novamente.png'

const EscolhaNovamenteContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;
`

const EscolhaNovamenteIcone = styled.img`
  width: 20vw;

  @media only screen and (max-width: 787px) {
    width:40vh;
  }
`

function EscolhaNovamente() {
    return (
        <Link to="/">
        <EscolhaNovamenteContainer id='clickme'>
          <EscolhaNovamenteIcone
          src={EscolhaNovamenteImagem}
          alt='Escolha novamente'/>
        </EscolhaNovamenteContainer>
        </Link>
    )
}

export default EscolhaNovamente