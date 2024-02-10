import bulbasaur from '../../imagens/bulbasaur.png'
import { Link } from "react-router-dom"

function Bulbasaur() {
    return (
        <Link className='inicial-home' to="/sobre" onClick={BulbasaurCor}>
            <img src= {bulbasaur} alt='bulbasaur' />
        </Link>
    )
}

const html = document.querySelector('html')

function BulbasaurCor() {
        html.setAttribute('data-pokemon', 'bulbasaur')
}

export default Bulbasaur