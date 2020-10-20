import {Nav, Navbar} from "react-bootstrap";

export default function menu() {
    return(
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/"><img src="../images/logo.png" alt="logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/">Anasayfa</Nav.Link>
                    <Nav.Link href="/hakkimizda">Hakkımızda</Nav.Link>
                    <Nav.Link href="/hakkimizda">Sulama</Nav.Link>
                    <Nav.Link href="/hakkimizda">Yayla Evi</Nav.Link>
                    <Nav.Link href="/hakkimizda">Öz Tüketim</Nav.Link>
                    <Nav.Link href="/hakkimizda">Referanslar</Nav.Link>
                    <Nav.Link href="/hakkimizda">İletişim</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}