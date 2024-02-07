import './estilo.css'
import charmander from '../../imagens/charmander.png'
import { Link } from "react-router-dom"

function Charmander() {
    return (
        <Link className='inicial-home' to="/sobre" onClick={CharmanderCor}>
            <img src= {charmander} alt='charmander' />
        </Link>
    )
}

const html = document.querySelector('html')

function CharmanderCor() {
        html.setAttribute('data-pokemon', 'charmander')
}

export default Charmander