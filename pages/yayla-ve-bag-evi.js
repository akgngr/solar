import { Container } from 'react-bootstrap'
import Layout from '../components/layout'
import Head from '../components/head'
import Ofgridsystem from '../components/ofgridsystem'
import Ongridsystem from '../components/ongridsystem'

const yayla = () => {
    return(
        <Layout>
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