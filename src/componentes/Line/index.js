import LineSVG from './lineSVG';
import styled from 'styled-components';

const LineContainer = styled.a`
    display: flex;
    justify-content: center;
    margin-bottom: 5vh;
    width: 100vw;
`



function Line() {
    return (
        <LineContainer>
          <LineSVG />
        </LineContainer>
    )
}

export default Line