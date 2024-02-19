import styled from 'styled-components'
import './estilo.css'
import pikachu from '../../imagens/pikachu-icone.webp'
import bulbasaur from '../../imagens/bulbasaur-icone.webp'
import charmander from '../../imagens/charmander-icone.webp'
import squirtle from '../../imagens/squirtle-icone.webp'
import { Link } from "react-router-dom"

const MenuEscolhaNovamente = styled.div `
    display: none;    

    img {
        height: 5vh;
    }
`

const html = document.querySelector('html')

function menuEscolhaNovamente() {
return(
    <MenuEscolhaNovamente>
        
        <Link className='inicial-home' onClick={CharmanderCor}>
            <img src= {charmander} alt='charmander'/>
        </Link>
        <Link className='inicial-home' onClick={BulbasaurCor}>
            <img src= {bulbasaur} alt='bulbasaur' />
        </Link>
        <Link className='inicial-home' onClick={PikachuCor}>
            <img src= {pikachu} alt='pikachu' />
        </Link>
        <Link className='inicial-home' onClick={SquirtleCor}>
            <img src= {squirtle} alt='squirtle' />
        </Link>
    </MenuEscolhaNovamente>
)
}

function CharmanderCor() {
    html.setAttribute('data-pokemon', 'charmander')
}

function BulbasaurCor() {
    html.setAttribute('data-pokemon', 'bulbasaur')
}

function PikachuCor() {
        html.setAttribute('data-pokemon', 'pikachu')
}

function SquirtleCor() {
    html.setAttribute('data-pokemon', 'squirtle')
}

export default menuEscolhaNovamente