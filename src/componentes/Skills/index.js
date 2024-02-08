import HTMLCSSLogo from '../../imagens/htmlcss.png'
import JavaScriptLogo from '../../imagens/javascript.png'
import ReactLogo from '../../imagens/react.png'
import NodeLogo from '../../imagens/node.png'
import styled from 'styled-components';

const SkillsContainer = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;

`

const SkillsLogo = styled.img`
  height: 10vh;
  margin: 0 2vw;
`

const Skill = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2vh 0;
  font-size: calc(12px + 0.5vw);
  font-weight: bold;
  color: #A16B2F;
`

function Skills() {
    return (

        <SkillsContainer>
        <Skill>
          <SkillsLogo
            src={HTMLCSSLogo}
            alt='HTMLCSS Logo'
            />
            <p>- HTML e CSS</p>
        </Skill>
        <Skill>
            <SkillsLogo
                src={JavaScriptLogo}
                alt='JavaScript Logo'
            />
            <p>- JavaScript</p>
        </Skill>
        <Skill>
            <SkillsLogo
                src={ReactLogo}
                alt='ReactLogo'
            />
            <p>- React</p>
        </Skill>
        <Skill>
            <SkillsLogo
                src={NodeLogo}
                alt='NodeLogo'
            />
            <p>- Node.js</p>
        </Skill>
        </SkillsContainer>
    )
}

export default Skills