import Layout from '../components/layout'
import Slideshow from "../components/slideshow";
import ShortDetay from "../components/ShortDetay";
import Contact from "../components/Contact";
import Tarla from "../components/Tarla";


export default function Home() {
  return (
    <Layout>
      <Slideshow />
      <Contact />
      <Tarla />
      <ShortDetay />
    </Layout>
  )
}
