import styled from 'styled-components'
import PikachuTail from '../../imagens/pikachu-tail.png'


const html = document.getElementsByName('htmldata-pokemon').value

function Bush() {
    if (html === 'pikachu'){
    return (
        <BushContainer>
            <img src={PikachuTail}
            alt='pikachu tail'
            className='hinge'
             />
        </BushContainer>
    )
    } else {
        return (
            <BushContainer>
                <img src={PikachuTail}
                alt='pikachu tail'
                className='hinge'
                 />
            </BushContainer>
        )
    }
}
const BushContainer = styled.div`
    width: 100vw;
    height: 15vh;
    z-index: 2;

    img {
        height: 10vh;
        margin-top: 6vh;
        margin-left: 5vw;
    }

    width: 100vw;
    background-image: url("../../imagens/bush.png");
    background-size: contain;

`

export default Bush


