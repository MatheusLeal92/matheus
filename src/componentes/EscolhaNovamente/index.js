import styled from 'styled-components';
import { Link } from "react-router-dom"

const EscolhaNovamenteContainer = styled.div`
  display: flex;
  font-size: 30px;
`

function EscolhaNovamente() {
    return (
        <Link to="/">
        <EscolhaNovamenteContainer>
          <p><strong>Escolha Novamente</strong></p>
        </EscolhaNovamenteContainer>
        </Link>
    )
}

export default EscolhaNovamente