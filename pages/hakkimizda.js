import Layout from '../components/layout'
import {Col, Container, Row} from "react-bootstrap";
import Seo from '../components/seo'
import Head from '../components/head'

export default function Hakkimizda(){
    return(
        <Layout>
            <Seo 
                title = "Hakkımızda | Derviş Solar"
                description = "Derviş Solar Sistemleri, Hatay’ın Hassa İlçesine Bağlı Aktepe Mahallesinde kurulmuştur."
                metakey = "güneş enerjisi, ücretsiz elektrik, güneş enerji ile tarla sulama, güneş panelleri"
            />
            <Head />
            <Container className="pt-5 pb-5">
                <Row>
                    <Col lg={8} className="offset-lg-2">
                        <article>
                            <header>
                                <h1>Hakkımızda</h1>
                            </header>
                            <p>Derviş Solar Sistemleri, Hatay’ın Hassa İlçesine Bağlı Aktepe Mahallesinde kurulmuştur.
                                Güneş ışığını elektrik enerjisine dönüştüren yüksek performanslı solar sistemler kurmaktadır.
                            </p>
                            <p>
                                Kullandığımız panellerde 20 yıl %90 verimlilik garantisi veriyoruz. Sektörel ve inovatif gelişmeleri yakından takip ederek, pazara yenilikçi çözümler sunmak için kaliteden asla ödün vermeden müşteri memnuniyetini en üst seviyede tutuyoruz.
                            </p>
                            <p>
                                Yenilenebilir enerji sektörüne katkı sağlamak için hizmet ediyoruz. Çevreye ve doğaya olan sorumluluklarımızın bilincinde hareket ederek, gelecek nesillerimize daha temiz ve yaşanılabilir bir dünya bırakmaya katkıda bulunuyoruz.
                            </p>
                            <p>
                                Birinci sınıf enerji çözümlerimizi dünyanın her yerindeki işletmelere dağıtırken ayrıca bireysel ihtiyaçlarınız için de mükemmel seçenekler sunuyoruz.
                            </p>
                        </article>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}