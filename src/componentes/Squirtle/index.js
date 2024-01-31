import squirtle from '../../imagens/squirtle.png'
import { Link } from "react-router-dom"

function Squirtle() {
    return (
        <Link className='inicial-home' onclick="mudaCor()" to="/sobre">
            <img src={squirtle} alt='squirtle' />
        </Link>


    )
}

export default Squirtle
