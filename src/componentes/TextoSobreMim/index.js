import styled from 'styled-components';

const TextoSobreMimContainer = styled.div`
  display: flex;
  font-size: 30px;
`

function TextoSobreMim() {
    return (
        <TextoSobreMimContainer>
          <p>Texto sobre mim</p>
        </TextoSobreMimContainer>
    )
}

export default TextoSobreMim