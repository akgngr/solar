import {Col,Container, Row, Image} from "react-bootstrap";

function Tarla() {
    return(
        <section id="tarla" className="pt-6 pb-5">
            <Container>
                <h1 className="pb-2 text-center">Güneş varsa elektrik faturası yok!</h1>
                <Row>
                    <Col lg={6} xs={12}>
                        <Image src="/images/tarimsal-sulama.jpg" fluid />
                        <h2 className="pt-3">Solar Sulama Nedir?</h2>
                        <p>Güneş enerjisinin tarımsal sulamada “kuyudan su çekmek amacı” ile kullanılmasıdır.
                            Sabah 08:00'den akşam 18:00'e kadar kesintisiz sulama imkanı sunan projemiz
                            kısa sürede kendisini amorti etmektedir. Çiftçilerimize sınırsız sulama konforu
                            sunduğumuz bu sistemi, komşularınızla ortaklaşa da kullanabilirsiniz.
                        </p>
                        <h3>Sıfır faiz ile ödeme sistemi nedir?</h3>
                        <p>Güneş Paneli ile çalışan Sulama Sistemleri için Ziraat Bankası 5 yıl vade ile 0 faizli
                            kredi imkanı sunmaktadır. Şartlar ve detaylı bilgi için lütfen bizimle iletişime geçiniz.
                        </p>
                        <h3>Kurulum Süreci Nasıldır?</h3>
                        <p>Güçlü ekibimiz ve deneyimli çözüm ortaklarımız sayesinde, tarla sulama sistemleri ve
                            çatı projeleri için 1 gün keşif, 1 gün de montaj ve teslimat olmak üzere toplamda 2 gün
                            içinde solar enerji sisteminizi tam randımanla çalışır vaziyette sizlere teslim ediyoruz.
                        </p>
                    </Col>
                    <Col lg={6} xs={12}>
                        <h3>Panellerin ömrü ne kadar?</h3>
                        <p>Firmamız fiyat değil kalite odaklı bir yaklaşımla hareket etmektedir. Kullanılan
                            paneller 25 yıl boyunca Derviş Solar Sistem Verim Garantisi altındadır.  Kullanım
                            şartnamesine uyulması halinde panellerimizin 25 yıl sonra en az %90 performansla
                            çalışacağını garanti ediyoruz. Panel dışında kullanılan malzemelerin garantisi 2 yıldır.
                        </p>
                        <h3>Bir evin kullanımı için kurulacak sistemin maliyeti nedir?</h3>
                        <p>Aylık 120 TL - 170 TL arasında elektrik faturası ödeyen bir hanenin elektrik ihtiyacını karşılayacak
                            sistemin kurulum maliyeti 16.000 TL civarındadır. Fiyatlar dolar kuru ve piyasa koşullarına göre
                            değişkenlik göstermektedir.
                        </p>
                        <h3>Evde kullanım için depolama yapılıyor mu?</h3>
                        <p>Projelerimizde Jel Akü kullanılmaktadır. Flooded tipi solar akülerin aksine kapalı jel akülerin
                            delikleri yoktur ve gaz salmazlar. Bu nedenle havalandırma önemli değildir ve bu aküler iç
                            mekanlarda herhangi bir risk olmadan yüksek performans ile uzun süre kullanılabilmektedir.
                        </p>
                        <h3>Çatıyı kurduğumuzda devlet bizden vergi istiyor mu?</h3>
                        <p>Hayır. Vergi veya başka bir isim altında devlet tarafından herhangi bir ücret talep edilmemektedir.</p>
                        <h3>Panellerin iyisi kötüsü var mı?</h3>
                        <p>Piyasa koşullarında rekabet edebilmek için bir çok Solar Enerji Firmasının defolu panel kullandığı
                            görülmektedir. Bu paneller, dışarıdan bakıldığında fark edilmeyebilir ancak performansı oldukça
                            düşüktür. Bu panellerin bir kaç yıl içinde performansının hızla düştüğü görülecektir. Derviş Solar
                            tarafından kullanılan panellerde 25 yıl sonunda sadece %10 kayıp beklenirken bahse konu defolu
                            panellerde kayıp oranı kıyaslanmayacak seviyelerdedir.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Tarla