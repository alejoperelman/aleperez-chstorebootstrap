import './NavBar.css'
import CartWidget from '../cartWidget/CartWidget'

export const NavBar = (props) => {
    return (
        <nav className="NavBar">
            <h1>APStore</h1>
            <ul className="UL">
                <li className="items">Home</li>
                <li className="items">Ofertas</li>
                <li className="items">Oportunidades</li>
                <li className="items">Contacto</li>
                <li className="items"><CartWidget /></li>
            </ul>
            <p>Bienvenido: {props.user}</p>
        </nav>
    )
}
