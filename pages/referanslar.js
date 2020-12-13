import { Container } from 'react-bootstrap'
import Layout from '../components/layout'
import Head from '../components/head'

const referanslar = () => {
    return (
        <Layout>
            <Head />
            <Container className='pt-6 pb-6'>
            <h1>Referanslarımız</h1>
            <p>Çok yakında referanslarımızı buraya ekleyeceğiz. Dilerseniz sizde bizim referansımız olabilirsiniz. Referansımız olmak isterseniz bizimle <a href="/iletisim">iletişime</a> geçmekten çekinmeyin.</p>
            </Container>
        </Layout>
    )
}

export default referanslar