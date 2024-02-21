import styled from 'styled-components'
import pikachu from '../../imagens/pikachu.png'
import bulbasaur from '../../imagens/bulbasaur.png'
import charmander from '../../imagens/charmander.png'
import squirtle from '../../imagens/squirtle.png'
import { Link } from "react-router-dom"

const StarterContainer = styled.div ``

const html = document.querySelector('html')

function starterPokemonCard() {
    return(
        <StarterContainer>
            <Link className='inicial-home' to="/sobre" onClick={CharmanderCor}>
                <img src= {charmander} alt='charmander'/>
            </Link>
            <Link className='inicial-home' to="/sobre" onClick={BulbasaurCor}>
                <img src= {bulbasaur} alt='bulbasaur' />
            </Link>
            <Link className='inicial-home' to="/sobre" onClick={PikachuCor}>
                <img src= {pikachu} alt='pikachu' />
            </Link>
            <Link className='inicial-home' to="/sobre" onClick={SquirtleCor}>
                <img src= {squirtle} alt='squirtle' />
            </Link>
        </StarterContainer>
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
    
    export default starterPokemonCard


/* export default function StarterPokemonCards(props) {
    console.log(props)
    return(
        <StarterContainer>
            <StarterPokemonCard pokemon="charmander"/>
            <StarterPokemonCard pokemon="bulbasaur"/>
            <StarterPokemonCard pokemon="pikachu"/>
            <StarterPokemonCard pokemon="squirtle"/>
        </StarterContainer>
    )
}

function StarterPokemonCard({pokemon}) {
    return(
    <Link className='inicial-home' to="/sobre" onClick={SetPokemonColor(pokemon)}>
        <img src= {process.env.PUBLIC_URL + `/images/${pokemon}.png`} alt={pokemon} />
    </Link>
    )
}

function SetPokemonColor(pokemon) {
    html.setAttribute('data-pokemon', pokemon)
} */