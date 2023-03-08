import { Container, Nav, Navbar as BootstrapNavbar } from "react-bootstrap";
import CartWidget from "./CartWidget";

const Navbar = () => {
    return (
        <BootstrapNavbar bg="dark" variant="dark">
            <Container>
                <BootstrapNavbar.Brand href="#home">Shoes Shop</BootstrapNavbar.Brand>
                <Nav>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#shop">Shop</Nav.Link>
                    <Nav.Link href="#aboutUs">About us</Nav.Link>
                </Nav>
                <CartWidget />
            </Container>
        </BootstrapNavbar>
    );
};

export default Navbar;