import styled from 'styled-components';
import EscolhaNovamenteImagem from '../../imagens/escolha-novamente.png'
import MenuEscolhaNovamente from '../MenuEscolhaNovamente';

const EscolhaNovamenteContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  padding: 0 5px;
  min-width: 120px;
  
  &:hover {
  animation: none;
  }

  @media only screen and (max-width: 787px) {
    padding-top: 2vh;
  }
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

const Button = styled.button`
  border: none;
  background: none;
  width: fit-content;
  height: fit-content;
  padding: 0;
`

function EscolhaNovamente() {
    return (
        <EscolhaNovamenteContainer className='hithere'>
          <Button onclick='hideAndShow()'>
            <EscolhaNovamenteIcone
            id='clickme'
            className='EscolhaNovamente'
            src={EscolhaNovamenteImagem}
            alt='Escolha novamente'/>
          </Button>
          <MenuEscolhaNovamente />
        </EscolhaNovamenteContainer>
    )
}
<button id='toggle-button' onclick='hideAndShow()'>Show</button>

export default EscolhaNovamente