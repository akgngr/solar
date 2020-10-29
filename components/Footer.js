import {ListGroup, Container, Row, Col} from "react-bootstrap";
import Instagram from "./svg/instagram";

const Footer = () => {
    return(
        <footer className="pt-5">
            <Container fluid>
                <Row>
                    <Col>
                        <img src="../images/logo.png" alt="logo" />
                        <p className='pt-3'>
                            Derviş Solar Sistemleri, Hatay’ın Hassa İlçesine Bağlı Aktepe Mahallesinde kurulmuştur. Güneş ışığını elektrik enerjisine dönüştüren yüksek performanslı solar sistemler kurmaktadır.
                        </p>
                    </Col>
                    <Col>
                        <h3>Menü</h3>
                        <ListGroup variant="flush">
                            <ListGroup.Item><a href="#">Anasayfa</a></ListGroup.Item>
                            <ListGroup.Item><a href="#">Hakkımızda</a></ListGroup.Item>
                            <ListGroup.Item><a href="#">Öz Tüketim</a></ListGroup.Item>
                            <ListGroup.Item><a href="#">Referanslar</a></ListGroup.Item>
                            <ListGroup.Item><a href="#">İletişim</a></ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col>
                        <h3>Çözümlerimiz</h3>
                        <ListGroup variant="flush">
                            <ListGroup.Item><a href="#">Tarla Sulama</a></ListGroup.Item>
                            <ListGroup.Item><a href="#">Yayla Evi</a></ListGroup.Item>
                            <ListGroup.Item><a href="#">Bağ Evi</a></ListGroup.Item>
                            <ListGroup.Item><a href="#">Çiftlik</a></ListGroup.Item>
                            <ListGroup.Item><a href="#">Fabrika</a></ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col>
                        <h3 className='pb-4'>Bizi Takip Edin</h3>
                        <p><a href="https://instagram.com/dervissolar"><Instagram /> @dervissolar</a></p>
                        <p><a href="https://instagram.com/dervissolar"><Instagram /> @dervissolar</a></p>
                        <p><a href="https://instagram.com/dervissolar"><Instagram /> @dervissolar</a></p>
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