import { Container } from 'react-bootstrap'
import Layout from '../components/layout'
import Head from '../components/head'

const oztuketim = () => {
    return(
        <Layout>
            <Head />
            <Container className='pt-6 pb-6'>
                <h1>ÖZ Tüketim</h1>
            </Container>
        </Layout>
    )
}

export default oztuketim