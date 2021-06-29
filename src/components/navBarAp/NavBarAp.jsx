import { Navbar, Nav, NavDropdown }  from 'react-bootstrap'
import CartWidget from '../cartWidget/CartWidget'
import './NavBarAp.css'

export const NavBarAp = ({user}) => {
    const categories = [ 'Servicios', 'Hardware', 'Software']
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">APStore</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <NavDropdown title="Categorias" id="collasible-nav-dropdown">
                    {categories.map((category)=> (
                    <NavDropdown.Item href={`/category/${category.toLowerCase()}`}>{category}</NavDropdown.Item>
                    ))}
                </NavDropdown>
                <Nav.Link href="/Contact">Contacto</Nav.Link>
                </Nav>
                <Nav>
                <Nav.Link href="#deets">Bienvenido: {user}</Nav.Link>
                <Nav.Link href="#pricing"> <CartWidget /> </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </>
)
}