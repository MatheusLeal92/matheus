import styled from 'styled-components';
import { Link } from "react-router-dom"
/* import pikachuIcone from '../../imagens/pikachu-icone.webp'
import menuEscolhaNovamente from '../MenuEscolhaNovamente' */

const EscolhaNovamenteContainer = styled.div`
  color: #A16B2F;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;
`

function EscolhaNovamente() {
    return (
        <Link to="/">
        <EscolhaNovamenteContainer id='clickme'>
          <p>ESCOLHA NOVAMENTE</p>
        </EscolhaNovamenteContainer>
        {/* <menuEscolhaNovamente>        
        <img id="book" src={pikachuIcone} alt="" width="100" height="123"></img>
        </menuEscolhaNovamente> */}
        </Link>
    )
}

export default EscolhaNovamente