import fotoDePerfil from '../../imagens/FotoDePerfil.png';
import styled from 'styled-components';

const FotoContainer = styled.div`
    display: flex;
    justify-content: left;
    align-itens: center;
    width: 20vw;
`

const FotoImage = styled.img`
    width: 15vw;
`

function FotoDePerfil() {
    return (
        <FotoContainer>
          <FotoImage
            src={fotoDePerfil}
            alt='Foto de Perfil'
        />
        </FotoContainer>
    )
}

export default FotoDePerfil