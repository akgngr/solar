import {Col, Container, Row, Image, Button} from "react-bootstrap";

function Tarla() {
    return(
        <section id="tarla" className="pt-6 pb-5 tarla">
            <Container>
                <Row>
                    <Col lg={6} xs={12} md={6} className="tarlasulama">
                    </Col>
                    <Col lg={6} xs={12} md={6} className='aciklama'>
                        <h2 className="pb-4">Tarlanızı Güneşin Gücüyle Sulayın Kâra Geçin!</h2>
                        <p>
                            Güneş enerjili sulama sistemleri, solar pompa sistemleri, güneş enerjisinden faydalanılarak elektrik motorlu pompaların çalıştırılmasını sağlayan sistemlerdir. Özellikle şebekenin olmadığı yerlerde her türlü sulama sistemleri için çok ekonomik, uzun ömürlü ve çevreci çözümleri siz değerli müşterilerimize sunulabiliyoruz.
                        </p>
                        <p>
                            Güneş enerjisi ile çalışan özel pompalarımız sayesinde 300 metre derinliğe kadar su temini yapılabiliyoruz.
                        </p>
                        <Button type='submit' className='btn-secondary'>Detaylı Bilgi Al</Button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Tarla