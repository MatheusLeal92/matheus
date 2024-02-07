import styled from 'styled-components';
import './estilo.css'

const TextoSobreContainer = styled.div`
  width: 50vw;
  font-size: 2.8vh;
  font-family: Montserrat;
`

function TextoSobre() {
    return (
        <TextoSobreContainer>
          <p id='TextoSobre'>Estudante de Licenciatura em Matemática pela Universidade Federal de Santa Catarina, faço cursos online sobre Desenvolvimento Web, onde pretendo me desenvolver. <br/><br/>
            Já trabalhei em muitas outras áreas e já iniciei outros cursos de graduação em faculdades como UFRGS e Unisinos, mas sem me encontrar acabei indo para a área da gastronomia, onde fiquei por muitos anos em várias funções (garçom, atendente, cozinheiro,...) até ter meu próprio delivery de cachorro quente, que serviu para angariar dinheiro para eu ter meu delivery de pizza. <br/><br/>
            Com a pandemia e a necessidade de ficar em casa, acabei parando para pensar o que realmente queria e gostava de fazer, e percebi que desde a saída do colégio estava só indo para onde o destino me levasse sem planejar muito. <br/><br/>
            Decidi então estudar programação e voltar a cursar licenciatura, que são as áreas que realmente me deixam realizado.</p>
        </TextoSobreContainer>
    )
}

export default TextoSobre