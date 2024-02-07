import './estilo.css'
import pikachu from '../../imagens/pikachu.png'
import { Link } from "react-router-dom"

function Pikachu() {
    return (
        <Link className='inicial-home' to="/sobre" onClick={PikachuCor}>
            <img src= {pikachu} alt='pikachu' />
        </Link>
    )
}

const html = document.querySelector('html')

function PikachuCor() {
        html.setAttribute('data-pokemon', 'pikachu')
}

export default Pikachu