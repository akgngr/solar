import { Container } from "react-bootstrap"
import Contact from "../components/Contact"
import Layout from "../components/layout"
import Seo from '../components/seo'
import Head from '../components/head'

const iletisim = () => {
    return(
        <Layout>
            <Seo 
                title = "İletişim | Derviş Solar"
                description = "Derviş Solar Sistemleri, Hatay’ın Hassa İlçesine Bağlı Aktepe Mahallesinde kurulmuştur."
                metakey = "güneş enerjisi, ücretsiz elektrik, güneş enerji ile tarla sulama, güneş panelleri, iletişim"
            />
            <Head />
            <Container>
                <Contact />
            </Container>
        </Layout>
    )
}

export default iletisim