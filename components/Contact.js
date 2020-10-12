import {Button, Card, Col, Container, Form, FormGroup, Row} from "react-bootstrap";
import Mapstik from "./svg/mapstik";
import Phoneempty from "./svg/phoneempty";
import Tel from "./svg/tel";

function Contact() {
    return (
        <section id="ontact" className="pt-6 pb-2">
            <Container>
                <Row>
                    <Col lg={6} md={6} className="pt-5">
                        <h2>Keşif İçin Bizimle İletişime Geçin</h2>
                        <p>Bizimle Iletişime Geçmekten Çekinmeyin.</p>
                        <p className="pt-4">
                            <Mapstik />
                            <span className="pl-2"> Aktepe Mahallesi, Atatürk Cad. No: 4 31710 Hassa/Hatay </span>
                        </p>
                        <p className="pt-4">
                            <Phoneempty />
                            <span className="pl-2"><a href="tel:+905379271214">+905379271214</a></span>
                        </p>
                        <p className="pt-4">
                            <Tel/>
                            <span className="pl-2"> <a href="tel:+903267835484">+903267835484</a> </span>
                        </p>
                    </Col>
                    <Col lg={6} md={6}>
                        <Card className="shadow-lg p-3 mb-5 bg-white rounded border-0">
                            <Card.Body>
                                <Card.Title>Biz Sizi Arayalım</Card.Title>
                                <Form className="contact">
                                    <FormGroup className="pt-2">
                                        <Form.Control type="text" placeholder="Adınız Soyadınız" className="input" />
                                    </FormGroup>
                                    <Row>
                                        <Col>
                                            <Form.Group className="pt-2">
                                                <Form.Control type="text" placeholder="Telefon Numaranız" className="input" />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group className="pt-2">
                                                <Form.Control as="select" className="input">
                                                    <option>Kredi kullanılacak mı?</option>
                                                    <option>Evet</option>
                                                    <option>Hayır</option>
                                                </Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row className="pt-2">
                                        <Col>
                                            <Form.Control type="text" placeholder="İliniz" className="input" />
                                        </Col>
                                        <Col>
                                            <Form.Control type="text" placeholder="Proje Türü" className="input" />
                                        </Col>
                                    </Row>

                                    <FormGroup className="pt-2">
                                        <Form.Text placeholder="Mesajınız" className="input" />
                                    </FormGroup>
                                    <FormGroup className="form-check pt-2">
                                        <Form.Check type="checkbox" id="check" label="KVKK bilgilendirmesini okudum ve anladım."/>
                                        <Form.Label><a href='#'></a></Form.Label>
                                        <small><a href="#">KVKK Metnimiz</a></small>
                                    </FormGroup>
                                    <Button variant="primary" type="submit" className="mt-3 mb-2">Gönder</Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact