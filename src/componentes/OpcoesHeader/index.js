import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Opcoes = styled.ul`
    display: flex;
`

const Opcao = styled.li`
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    cursor: pointer;
    margin: 0 2vw;
`

const textoOpcoes = ['SOBRE', 'SKILLS', 'PROJETOS', 'CONTATO']

function OpcoesHeader() {
    return (
        <Opcoes>
            { textoOpcoes.map( (texto) => (
                <Link to={`/${texto.toLowerCase()}`} ><Opcao><p>{texto}</p></Opcao></Link>
            ) ) }
        </Opcoes>
    )
}

export default OpcoesHeader