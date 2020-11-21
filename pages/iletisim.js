import { Container } from "react-bootstrap"
import Contact from "../components/Contact"
import Layout from "../components/layout"
import Head from '../components/head'

const iletisim = () => {
    return(
        <Layout>
            <Head />
            <Container>
                <Contact />
            </Container>
        </Layout>
    )
}

export default iletisim