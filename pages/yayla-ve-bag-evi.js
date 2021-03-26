import { Container } from 'react-bootstrap'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Ofgridsystem from '../components/ofgridsystem'
import Ongridsystem from '../components/ongridsystem'
import Head from '../components/head'

const yayla = () => {
    return(
        <Layout>
            <Seo 
                title = "Yayla ve Bağ Evi Solar Sistem Çözümlerimiz | Derviş Solar"
                description = "Özellikle yaz aylarında çokça rağbet gören yayla evlerinde ağırlıklı olarak Off Grid yani Akülü Güneş enerjisi elektrik üretim sistemi kuruyoruz."
                metakey = "güneş enerjisi, ücretsiz elektrik, güneş enerji ile tarla sulama, güneş panelleri"
            />
            <Head />
            <Container className='pt-6 pb-6'>
                <h1>Yayla ve Bağ Evi Solar Sistem Çözümlerimiz</h1>
                <p>
                Özellikle yaz aylarında çokça rağbet gören yayla evlerinde ağırlıklı olarak Off Grid yani Akülü Güneş enerjisi elektrik üretim sistemi kuruyoruz. Bu sistem temel olarak Güneş Paneli, şarj kontrol ünitesi, Aküler (Batarya) ve inverterden oluşmaktadır.
                </p>
                <p>
                Yayla evleri dışından bağ evi, karavan, arıcı çadırı, kamp çadırı gibi birçok farklı alandaki enerji ihtiyacını gidermeye yönelik de düşünülebilir.
                </p>
                <p>
                Kuracağımız güneş enerjisi elektrik üretim sistemleri ile aydınlatma, lamba, bilgisayar, televizyon, buz dolabı, çamaşır makinesi, bulaşık makinesi, klima, hidrofor, led projektör, süt sağım makinası, dalgıç pompa, sulama pompası çalıştırılabilmektedir.
                </p>
                <Ongridsystem />
                <Ofgridsystem />
            </Container>
        </Layout>
    )
}

export default yayla