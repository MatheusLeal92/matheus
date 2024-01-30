import styled from 'styled-components';

const TextoSobreContainer = styled.div`
  display: flex;
  font-size: 30px;
`

function TextoSobre() {
    return (
        <TextoSobreContainer>
          <p>Texto sobre mim</p>
        </TextoSobreContainer>
    )
}

export default TextoSobre