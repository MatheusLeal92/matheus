import styled from 'styled-components';


  const TituloDaPagina = styled.div`
    display: flex;
    width: 100vw;
    font-size: 30px;
    justify-content: center;
    color: #A16B2F;
    font-weight: bold;
    margin: 5vh 0;
`





/* ABAIXO ESTAVA TENTANDO FAZER COM QUE O TITULO FOSSE BUSCADO AUTOMATICAMENTE */




/*  const Opcao = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    min-width: 120px;
`

const tituloOpcoes = ['SOBRE', 'SKILLS', 'PROJETOS', 'CONTATO']

function TituloDaPagina() {
    return (
        <Titulo>
          { tituloOpcoes.map( (texto) => (
                <Opcao><p>{texto}</p></Opcao>
            ) ) }
        </Titulo>
    )
} */

export default TituloDaPagina