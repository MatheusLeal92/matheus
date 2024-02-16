import fotoDePerfil from '../../imagens/FotoDePerfil.png';
import styled from 'styled-components';

const FotoContainer = styled.div`
    display: flex;
    justify-content: left;
    align-itens: center;
    margin-top: -15vh;
    width: 20vw;
    animation: fade 1s ease-in;

    @keyframes fade {
        0%{
            opacity:0;
        }
        100%{
            opacity:1;
        }
    }

    @media only screen and (max-width: 787px) {
        width: 100vw;
        justify-content: center;
        margin: 0 0 5vh 0;
      }
`

const FotoImage = styled.img`
    width: 15vw;

    @media only screen and (max-width: 787px) {
        width:25vh;
      }
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