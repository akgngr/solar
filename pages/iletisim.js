import { Container } from "react-bootstrap"
import Contact from "../components/Contact"
import Layout from "../components/layout"

const iletisim = () => {
    return(
        <Layout>
            <Container className="pt-6 pb-6">
                <Contact />
            </Container>
        </Layout>
    )
}

export default iletisim