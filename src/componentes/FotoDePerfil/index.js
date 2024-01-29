import fotoDePerfil from '../../imagens/FotoDePerfil.png';
import styled from 'styled-components';

const FotoContainer = styled.div`
  display: flex;
  font-size: 30px;
`

const FotoImage = styled.img`
  margin-right: 10px;
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