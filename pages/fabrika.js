import { Container } from 'react-bootstrap'
import Layout from '../components/layout'
import Head from '../components/head'

const fabrika = () => {
    return (
        <Layout>
            <Head />
            <Container className='pt-6 pb-6'>
            <h1>Fabrika</h1>
            </Container>
        </Layout>
    )
}

export default fabrika