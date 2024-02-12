import styled from 'styled-components';


const ProjetosContainer = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
`

const Projeto = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4vh;

  p {
    margin: 0;
  }
`


function Projetos() {
    return (

        <ProjetosContainer>
        <Projeto href="https://bhaskara-calculator.vercel.app/" target="_blank">
            <p>Bhaskara Calculator</p>
        </Projeto>
        <Projeto href="https://cofrinho-two.vercel.app/" target="_blank">
            <p>Cofrinho</p>
        </Projeto>
        </ProjetosContainer>
    )
}

export default Projetos