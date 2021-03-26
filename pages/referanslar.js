import { Container } from 'react-bootstrap'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Head from '../components/head'

const referanslar = () => {
    return (
        <Layout>
            <Seo 
                title = "Referanslar | Derviş Solar"
                description = "Derviş Solar Sistemleri, Hatay’ın Hassa İlçesine Bağlı Aktepe Mahallesinde kurulmuştur."
                metakey = "güneş enerjisi, ücretsiz elektrik, güneş enerji ile tarla sulama, güneş panelleri"
            />
            <Head />
            <Container className='pt-6 pb-6'>
            <h1>Referanslarımız</h1>
            <p>Çok yakında referanslarımızı buraya ekleyeceğiz. Dilerseniz sizde bizim referansımız olabilirsiniz. Referansımız olmak isterseniz bizimle <a href="/iletisim">iletişime</a> geçmekten çekinmeyin.</p>
            </Container>
        </Layout>
    )
}

export default referanslar