import styled from 'styled-components';
import TituloHomeImagem from '../../imagens/pokemon-fonte.png'


const TituloHomeContainer = styled.div`
    display: flex;
    align-itens: center;
    margin-bottom: 2vh;
`


const TituloHome = styled.img`
  width: calc(150px + 20vw);
`

function TituloDaHome() {
    return (
        <TituloHomeContainer>
          <TituloHome
            src={TituloHomeImagem}
            alt='Titulo da Home'
        />
        </TituloHomeContainer>
    )
}

export default TituloDaHome