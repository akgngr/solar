import { Row, Col } from "react-bootstrap"

const ongridsysmt = () => {
    return(
        <Row className="pt-5">
            <Col lg={12}>
                <h2>On Grid Sistem ( Şebeke Bağlantılı Sistem )</h2>
                <p>
                Şebeke bağlantılı fotovoltaik sistemler, üretilen elektriğin akülerde depolanması yerine üretim yerinde tüketilmesi prensibine dayalı çalışmaktadır. Projelendirme yapılırken üretilmesi istenilen ya da ihtiyaç olan enerji miktarı tespit edilir. Atmosferden gelen güneş ışınlarının solar modüller üzerine temas etmesi ile DC elektrik enerjisi üretilir. Üretilen enerji yüksek çevrim gücü olan, merkezi şebekeye bağlanabilen invertörler ile merkezi şehir şebeke sistemine bağlanır. Böylelikle panellerden üretilen enerji doğrudan şebeke sistemine gönderilmiş olur. Alan ve ışınım koşulları uygun olduğu taktirde şebekeye bağlı elektrik üretim sistemi ile istenilen güçte elektrik enerjisi üretimini sağlamak mümkündür.
                </p>
                <p>
                Güneş enerjisi ile elektrik üretimi kurulumu kolay bir enerji üretim aracı olduğu gibi, uzun ömürlü, işletme maliyeti olmayan, pratik ve seyyar olması gibi nedenlerden ötürü öncelikli tercih sebebi olmaktadır.
                </p>
                <h4>Sistemin temel bileşenleri;</h4>
                <ul>
                    <li>Fotovoltaik Panel,</li>
                    <li>Invertör,</li>
                    <li>Çift Yönlü sayaç (Şebeke sayacı) dır.</li>
                </ul>
                <p>
                Şebeke bağlantılı sistemler, yüksek güçte-santral boyutunda kurulabileceği gibi evsel ihtiyaç için daha küçük güçlü kurulumlarda gerçekleştirilebilir. Örneğin bu sistemlerde bir konutun elektrik gereksinimi karşılanabilirken, üretilen fazla enerji elektrik şebekesine verilir, yeterli enerjinin üretilmediği durumlarda ise şebekeden enerji alınır. Böyle bir sistemde enerji depolaması yapmaya gerek yoktur, yalnızca üretilen DC elektriğin, AC elektriğe çevrilmesi ve şebeke uyumlu olması yeterlidir.
                </p>
                <h4>Şebeke bağlantılı sistemlerin avantajları:</h4>
                <ul>
                    <li>Sistemde akü gibi depolama birimleri kullanılmayacağı için depolama için ayrıca ek bir maliyet olmaz.</li>
                    <li>Sisteme yakın yerlerde tüketim olacağı ve depolama olmadığı için enerji çevriminin daha az olmasından dolayı kayıp minimum miktarda olacaktır.</li>
                    <li>Üretilen enerji şebekeye bağlı olduğu için aynı zamanda üretilen enerji yetmediğinde şebeke devreye girecek ve enerji eksiksiz olarak yükü besleyecektir.</li>
                    <li>Sistem tasarımı yapılırken, yükün tamamını karşılanması gibi bir zorunluluk olmadığı için istenilen miktara ya da alana göre tasarım yapılabilme esnekliğine sahiptir.</li>
                    <li>Alan yeterli olduğu taktirde sistem kurulu gücü artırılabilmektedir.</li>
                </ul>
            </Col>
        </Row>
    )
}

export default ongridsysmt