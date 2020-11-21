const { Container, Row, Col } = require("react-bootstrap")

const anasayfailetisim = () => {
    return (
        <section className="iletisimegec">
            <Container fluid>
                <Row className='d-flex justify-content-center align-items-center h-100 text-center pt-5 pb-5'>

                    <Col lg={9}>
                        <h2>Sizde Elektriğinizi Güneşten Üreterek Faturalardan Kurtulmak İstiyorsanız Bizimle İletişime Geçin.</h2>
                    </Col>

                    <Col lg={3}>
                        <a href="tel:+905379271214" className='btn btn-primary btn-lg text-white'>Bizi Arayın</a>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}

export default anasayfailetisim