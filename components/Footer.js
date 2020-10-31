import {ListGroup, Container, Row, Col} from "react-bootstrap";
import Instagram from "./svg/instagram";
import Facebook from './svg/facebook';
import Whatsapp from './svg/Whatsapp';


const Footer = () => {
    return(
        <footer className="pt-5">
            <hr className='pt-3' />
            <Container fluid>
                <Row>
                    <Col lg={3} md={12} sm={12} xs={12} className='foot-p'>
                        <img src="../images/logo.png" alt="logo" />
                        <p className='pt-3 text-muted'>
                            Derviş Solar Sistemleri, Hatay’ın Hassa İlçesine Bağlı Aktepe Mahallesinde kurulmuştur. Güneş ışığını elektrik enerjisine dönüştüren yüksek performanslı solar sistemler kurmaktadır.
                        </p>
                    </Col>
                    <Col lg={3} md={4} sm={12} xs={12} className='foot-p'>
                        <h4>Menü</h4>
                        <ListGroup variant="flush">
                            <ListGroup.Item><a href="#">Anasayfa</a></ListGroup.Item>
                            <ListGroup.Item><a href="#">Hakkımızda</a></ListGroup.Item>
                            <ListGroup.Item><a href="#">Öz Tüketim</a></ListGroup.Item>
                            <ListGroup.Item><a href="#">Referanslar</a></ListGroup.Item>
                            <ListGroup.Item><a href="#">İletişim</a></ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col lg={3} md={4} sm={12} xs={12} className='foot-p'>
                        <h4>Çözümlerimiz</h4>
                        <ListGroup variant="flush">
                            <ListGroup.Item><a href="#">Tarla Sulama</a></ListGroup.Item>
                            <ListGroup.Item><a href="#">Yayla Evi</a></ListGroup.Item>
                            <ListGroup.Item><a href="#">Bağ Evi</a></ListGroup.Item>
                            <ListGroup.Item><a href="#">Çiftlik</a></ListGroup.Item>
                            <ListGroup.Item><a href="#">Fabrika</a></ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col lg={3} md={4} sm={12} xs={12} className='foot-p'>
                        <h4 className='pb-4'>Bizi Takip Edin</h4>
                        <ul className="list-inline baglanti">
                            <li className="list-inline-item instagram"><a href="https://instagram.com/dervissolar"><Instagram /></a></li>
                            <li className="list-inline-item facebook"><a href="https://instagram.com/dervissolar"><Facebook /></a></li>
                            <li className="list-inline-item whatsapp"><a href="https://instagram.com/dervissolar"><Whatsapp /></a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <hr />
                <small className='text-muted pb-4'>Poverd By Derviş Solar. Tüm hakları saklıdır, izinsiz kopyalanamaz ve dağıtılamaz. İzinsiz kopyalama yapanlar hakkında yasal işlem yapılacaktır.</small>
            </Container>
        </footer>
    )
}

export default Footer