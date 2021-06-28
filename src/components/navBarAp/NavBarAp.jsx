import { Navbar, Nav, NavDropdown }  from 'react-bootstrap'
import CartWidget from '../cartWidget/CartWidget'
import './NavBarAp.css'

export const NavBarAp = ({user}) => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">APStore</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#features">...</Nav.Link>
                <NavDropdown title="Productos" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Servicios</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Hardware</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Software</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Ofertas</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#pricing">Contacto</Nav.Link>
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
