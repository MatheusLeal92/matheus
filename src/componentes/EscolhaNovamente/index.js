import styled from 'styled-components';
import EscolhaNovamenteImagem from '../../imagens/escolha-novamente.png'
import MenuEscolhaNovamente from '../MenuEscolhaNovamente';
import { useState } from 'react';

const EscolhaNovamenteContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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

function EscolhaNovamente() {
  const [show,setShow]=useState(!true)
    return (
        <EscolhaNovamenteContainer className='hithere'>
            <EscolhaNovamenteIcone
            onClick={()=>setShow(!show)}
            className='EscolhaNovamente'
            src={EscolhaNovamenteImagem}
            alt='Escolha novamente'/>
          {
          show?<MenuEscolhaNovamente />:null
          }
        </EscolhaNovamenteContainer>
    )
}


export default EscolhaNovamente