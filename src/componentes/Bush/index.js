import styled from 'styled-components'
import './estilo.css'
import PikachuTail from '../../imagens/pikachu-tail.png'

const BushContainer = styled.div`
    width: 100vw;
    height: 15vh;
    z-index: 2;

    img {
        height: 10vh;
        margin-top: 6vh;
        margin-left: 5vw;
    }
`

function Bush() {
    return (
        <BushContainer className="bushFooter">
            <img src={PikachuTail}
            alt='pikachu tail'
            className='hinge'
             />
        </BushContainer>
    )
}

export default Bush