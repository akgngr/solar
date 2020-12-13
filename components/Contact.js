import {Button, Card, Col, Container, Form, FormGroup, Row} from "react-bootstrap";
import Mapstik from "./svg/mapstik";
import Phoneempty from "./svg/phoneempty";
import Tel from "./svg/tel";
import Email from './svg/email'

function Contact() {
    return (
        <section id="contact" className="pb-2">
            <Container>
                <Row>
                    <Col lg={6} md={6}>
                        <Card className="shadow-lg p-3 mb-5 bg-white rounded border-0">
                            <Card.Body>
                                <Card.Title>Ücretsiz Keşif İçin Biz Sizi Arayalım</Card.Title>
                                <Form className="contact" name="contact" method="POST" netlify-honeypot="bot-field" data-netlify-recaptcha="true" data-netlify="true">
                                    
                                    <input type="hidden" name="form-name" value="contact" />

                                    <FormGroup className="pt-2">
                                        <Form.Control name="name" type="text" placeholder="Adınız Soyadınız" className="input" required />
                                    </FormGroup>
                                    <Row>
                                        <Col>
                                            <Form.Group className="pt-2">
                                                <Form.Control name="phone" type="text" placeholder="Telefon Numaranız" className="input" required />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group className="pt-2">
                                                <Form.Control name="kredi" as="select" className="input" required>
                                                    <option>Kredi kullanılacak mı?</option>
                                                    <option>Evet</option>
                                                    <option>Hayır</option>
                                                </Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row className="pt-2">
                                        <Col>
                                            <Form.Group className="pt-2">
                                                <Form.Control name="il" type="text" className="input" placeholder='İliniz' required />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group className="pt-2">
                                                <Form.Control name="ilce" type="text" className="input" placeholder='İlçeniz' required />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Form.Group className="pt-2" controlId="contactform.message">
                                        <Form.Label>Mesajınız</Form.Label>
                                        <Form.Control name="message" as="textarea" rows={3} required />
                                    </Form.Group>
                                    <FormGroup className="form-check pt-2">
                                        <Form.Check name="kvkk" type="checkbox" id="check" label="KVKK bilgilendirmesini okudum ve anladım." required />
                                        <Form.Label><a href='#'></a></Form.Label>
                                        <small><a href="#">KVKK Metnimiz</a></small>
                                    </FormGroup>
                                    <div data-netlify-recaptcha="true"></div>
                                    <div class="g-recaptcha" data-sitekey="6LdkHAUaAAAAAEQ_c9zdY0FdGlH9-5nuKDC2CiO1"></div>
                                    <Button variant="success" type="submit" className="mt-3 mb-2 btn-first">Gönder</Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={6} md={6} className="bilgiler">
                        <h2>Keşif İçin Bizimle İletişime Geçin</h2>
                        <p>Bizimle Iletişime Geçmekten Çekinmeyin.</p>
                        <p className="pt-4">
                            <Phoneempty />
                            <span className="pl-2"><a href="tel:+905379271214">+905379271214</a></span>
                        </p>
                        <p className="pt-4">
                            <Tel/>
                            <span className="pl-2"> <a href="tel:+903267835484">+903267835484</a> </span>
                        </p>
                        <p className="pt-4">
                            <Email />
                            <span className="pl-2"> <a href="mailto:info@dervissolar.com">info@dervissolar.com</a> </span>
                        </p>
                        <p className="pt-4">
                            <Mapstik />
                            <span className="pl-2"><a href="https://g.page/dervissolar?share">Aktepe Mahallesi, Atatürk Cad. No: 4 31710 Hassa/Hatay</a></span>
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact