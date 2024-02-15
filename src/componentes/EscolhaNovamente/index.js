import styled from 'styled-components';
import { Link } from "react-router-dom"
import EscolhaNovamenteImagem from '../../imagens/escolha-novamente.png'

const EscolhaNovamenteContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 5px;
  min-width: 120px;

`

const EscolhaNovamenteIcone = styled.img`
  width: 17vw;
  transition-duration: 0.5s;
  cursor: pointer;
  
  &:hover {
    transform: scale(1.1);
  }

  @media only screen and (max-width: 787px) {
    width:40vh;
  }
`

function EscolhaNovamente() {
    return (
        <EscolhaNovamenteContainer>
          <Link to="/">
            <EscolhaNovamenteIcone
            id='clickme'
            className='EscolhaNovamente'
            src={EscolhaNovamenteImagem}
            alt='Escolha novamente'/>
          </Link>
        </EscolhaNovamenteContainer>
    )
}

export default EscolhaNovamente