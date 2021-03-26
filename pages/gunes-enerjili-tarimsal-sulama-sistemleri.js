import { Container } from 'react-bootstrap'
import Layout from '../components/layout'
import Ofgridsystem from '../components/ofgridsystem'
import Ongridsystem from '../components/ongridsystem'
import Seo from '../components/seo'

const tarlasulama = () => {
    return(
        <Layout>
            <Seo 
                title = "Güneş Enerjili Tarımsal Sulama Sistemleri | Derviş Solar"
                description = "Güneş enerjili sulama sistemleri, solar pompa sistemleri, güneş enerjisinden faydalanılarak elektrik motorlu pompaların çalıştırılmasını sağlayan sistemlerdir."
                metakey = "güneş enerjisi, ücretsiz elektrik, güneş enerji ile tarla sulama, güneş panelleri"
            />
            <Container className='pt-6 pb-6'>
                <h1>Güneş Enerjili Tarımsal Sulama Sistemleri</h1>
                <p>
                    Güneş enerjili sulama sistemleri, solar pompa sistemleri, güneş enerjisinden faydalanılarak elektrik motorlu pompaların çalıştırılmasını sağlayan sistemlerdir. Özellikle şebekenin olmadığı yerlerde her türlü sulama sistemleri için çok ekonomik, uzun ömürlü ve çevreci çözümleri siz değerli müşterilerimize sunulabiliyoruz. Güneş enerjisi ile çalışan özel pompalarımız sayesinde 300 metre derinliğe kadar su temini yapılabiliyoruz.
                </p>
                <p>
                Elektriğin olmadığı yerlerde jeneratör veya pancar motoru gibi imkanlarla yapılan sulama sistemlerine kıyasen güneş enerjili sulama sistemi; bakım gerektirmemesi ve ilk yatırım bedelinden başka hiçbir masrafa ihtiyaç duymaması sayesinde değerli müşterilerimiz için çok mantıklı ticari sonuçlar ortaya çıkarmaktadır.
                </p>
                <h4>Sistem tasarımı yapılırken aşağıdaki bilgilerin belirlenmesi gerekmektedir;</h4>
                <ul>
                    <li>Suyun çıktığı kuyu derinliği,</li>
                    <li>Var ise deponun büyüklüğü depo yoksa günlük su ihtiyacının ne kadar olduğu,</li>
                    <li>Sulama sıklığı (Kaç günde bir sulama yapıldığı),</li>
                    <li>Kuyu ile depo arasındaki kot farkı,</li>
                    <li>Yatayda suyun taşınacağı mesafe,</li>
                    <li>Sistemin kullanılacağı aylar,</li>
                    <li>Sistemin kurulacağı şehir.</li>
                </ul>
                <h4>Güneş Enerjili Tarımsal Sistemlerin Avantajları:</h4>
                <ul>
                    <li>Sadece ilk yatırım maliyeti vardır,</li>
                    <li>İsletme maliyeti hemen hemen sıfırdır. (gerekli durumlardaki bakım maliyetleri hariç),</li>
                    <li>Yüksek verimlidir ve elektriksel kayıplar azdır,</li>
                    <li>Kolay montaj imkanı vardır,</li>
                    <li>Şebekeye bağımlılık yoktur.</li>
                </ul>
                <Ofgridsystem />
                <Ongridsystem />
            </Container>
        </Layout>
    )
}

export default tarlasulama