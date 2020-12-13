import {Col, Container, Row, Image, Button} from "react-bootstrap";

function Tarla() {
    return(
        <section id="yaylaevi" className="pb-6 yayla">
            <Container>
                <Row>
                    <Col lg={6} xs={12} md={6} className="yaylaevi">
                    </Col>
                    <Col lg={6} xs={12} md={6} className='aciklama'>
                        <h2 className="pb-4">Yayla veya Bağ Evinizin Elektriğini Güneşten Alın!</h2>
                        <p>
                            Boş yere ekstra faturalar ödemeyin yayla evinizin yada bağ evinizin elektrik ihtiyacını Güneş Panellerinden alın. Temiz enerji ve temiz gelecek için Güneş Panellerine yatırım yapın. Hem siz kazanın hemde dünya kazansın.
                        </p>
                        <p>
                            Güneş Panellerinden elde edilen elektriği piller sayesinde depolayıp akşamlarıda kullanabileceğinizi biliyormusunuz?
                        </p>
                        <Button variant="success" type='submit'>Detaylı Bilgi Al</Button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Tarla