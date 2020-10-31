import  {Button, Accordion, Card, Col, Container, Image, Row} from "react-bootstrap";
import React from "react";
import Montaj from './svg/montaj'

function Tarla(){
    return(
        <section id="shysolarenergy" className="pt-6">
            <Container fluid>
                <h1 className="pb-4 text-center">Güneş varsa elektrik faturası yok!</h1>
                <Row>
                    <Col xs={12} lg={6} className="d-flex align-items-start justify-content-center">
                        <Montaj />
                    </Col>
                    <Col xs={12} lg={6}>
                        <Accordion defaultActiveKey="0">
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                    <b className="btn ">Solar Sulama Nedir?</b>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>Güneş enerjisinin tarımsal sulamada “kuyudan su çekmek amacı” ile kullanılmasıdır. Sabah 08:00'den akşam 18:00'e kadar kesintisiz sulama imkanı sunan projemiz kısa sürede kendisini amorti etmektedir. Çiftçilerimize sınırsız sulama konforu sunduğumuz bu sistemi, komşularınızla ortaklaşa da kullanabilirsiniz.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="1">
                                    <b className="btn ">Sıfır faiz ile ödeme sistemi nedir?</b>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>Güneş Paneli ile çalışan Sulama Sistemleri için Ziraat Bankası 5 yıl vade ile 0 faizli kredi imkanı sunmaktadır. Şartlar ve detaylı bilgi için lütfen bizimle iletişime geçiniz.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="2">
                                    <b className="btn ">Kurulum Süreci Nasıldır?</b>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="2">
                                    <Card.Body>Güçlü ekibimiz ve deneyimli çözüm ortaklarımız sayesinde, tarla sulama sistemleri ve çatı projeleri için 1 gün keşif, 1 gün de montaj ve teslimat olmak üzere toplamda 2 gün içinde solar enerji sisteminizi tam randımanla çalışır vaziyette sizlere teslim ediyoruz.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="3">
                                    <b className="btn ">Panellerin ömrü ne kadar?</b>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="3">
                                    <Card.Body>Firmamız fiyat değil kalite odaklı bir yaklaşımla hareket etmektedir. Kullanılan paneller 25 yıl boyunca Derviş Solar Sistem Verim Garantisi altındadır. Kullanım şartnamesine uyulması halinde panellerimizin 25 yıl sonra en az %90 performansla çalışacağını garanti ediyoruz. Panel dışında kullanılan malzemelerin garantisi 2 yıldır.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="4">
                                    <b className="btn ">Bir evin kullanımı için kurulacak sistemin maliyeti nedir?</b>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="4">
                                    <Card.Body>Aylık 120 TL - 170 TL arasında elektrik faturası ödeyen bir hanenin elektrik ihtiyacını karşılayacak sistemin kurulum maliyeti 16.000 TL civarındadır. Fiyatlar dolar kuru ve piyasa koşullarına göre değişkenlik göstermektedir.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="5">
                                    <b className="btn ">Evde kullanım için depolama yapılıyor mu?</b>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="5">
                                    <Card.Body>Projelerimizde Jel Akü kullanılmaktadır. Flooded tipi solar akülerin aksine kapalı jel akülerin delikleri yoktur ve gaz salmazlar. Bu nedenle havalandırma önemli değildir ve bu aküler iç mekanlarda herhangi bir risk olmadan yüksek performans ile uzun süre kullanılabilmektedir.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="6">
                                    <b className="btn ">Çatıyı kurduğumuzda devlet bizden vergi istiyor mu?</b>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="6">
                                    <Card.Body>Hayır. Vergi veya başka bir isim altında devlet tarafından herhangi bir ücret talep edilmemektedir.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="7">
                                    <b className="btn ">Panellerin iyisi kötüsü var mı?</b>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="7">
                                    <Card.Body>Piyasa koşullarında rekabet edebilmek için bir çok Solar Enerji Firmasının defolu panel kullandığı görülmektedir. Bu paneller, dışarıdan bakıldığında fark edilmeyebilir ancak performansı oldukça düşüktür. Bu panellerin bir kaç yıl içinde performansının hızla düştüğü görülecektir. Derviş Solar tarafından kullanılan panellerde 25 yıl sonunda sadece %10 kayıp beklenirken bahse konu defolu panellerde kayıp oranı kıyaslanmayacak seviyelerdedir.</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Tarla