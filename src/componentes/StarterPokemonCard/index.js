import styled from 'styled-components'
import { Link } from "react-router-dom"

const StarterContainer = styled.div ``

const html = document.querySelector('html')

export default function StarterPokemonCards(props) {
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
        <img src= {process.env.PUBLIC_URL + `/public/images/${pokemon}.png`} alt={pokemon} />
    </Link>
    )
}

function SetPokemonColor(pokemon) {
    html.setAttribute('data-pokemon', pokemon)
}