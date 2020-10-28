import {Nav, NavDropdown, Navbar} from "react-bootstrap";

export default function menu() {
    return(
        <Navbar bg="white" expand="lg">
            <Navbar.Brand href="/"><img src="../images/logo.png" alt="logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/">Anasayfa</Nav.Link>
                    <Nav.Link href="/hakkimizda">Hakkımızda</Nav.Link>
                    <NavDropdown title="Sistemler" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#">Tarla Sulaması</NavDropdown.Item>
                        <NavDropdown.Item href="#">Yayla ve Bağ Evi</NavDropdown.Item>
                        <NavDropdown.Item href="#">Çiftlik</NavDropdown.Item>
                        <NavDropdown.Item href="#">Fabrika</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/hakkimizda">Öz Tüketim</Nav.Link>
                    <Nav.Link href="/hakkimizda">Referanslar</Nav.Link>
                    <Nav.Link href="/hakkimizda">İletişim</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}