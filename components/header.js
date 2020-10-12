import {Col, Container, Row} from "react-bootstrap";
import Maps from '../components/svg/maps'
import SmartPhone from "./svg/smartphone";
import Phone from "./svg/phone";
import Instagram from "./svg/instagram";

export default function header(){
    return(
        <Container fluid className="d-none d-sm-block">
            <Row  className="pt-2 pb-2">

                <Col lg={8} md={6} sm={6}>
                    <Maps/>
                    <small>Aktepe Mah, Atatürk Cad No:4 31710 Hassa/Hatay</small>
                </Col>

                <Col lg={4} md={6} sm={6}>
                    <SmartPhone/><a className="small pr-4" href="tel:+905379271214" target="_blank"> +905379271214</a>
                    <Phone/><a className="small mr-4" href="tel:+903267835484"> +903267835484</a>
                    <Instagram/><a className="small" href="https://instagram.com/dervissolar">dervissolar</a>
                </Col>

            </Row>
        </Container>
    )
}