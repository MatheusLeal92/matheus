import squirtle from '../../imagens/squirtle.png'
import { Link } from "react-router-dom"
import './estilo.css'

function Squirtle() {
    return (
        <Link className='inicial-home' to="/sobre" onClick={SquirtleCor}>
            <img src= {squirtle} alt='squirtle' />
        </Link>
    )
    
}

const html = document.querySelector('html')

function SquirtleCor() {
    html.setAttribute('data-pokemon', 'squirtle')
}

export default Squirtle
