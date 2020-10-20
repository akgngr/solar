import Layout from '../components/layout'
import Slideshow from "../components/slideshow";
import ShortDetay from "../components/ShortDetay";
import Contact from "../components/Contact";
import TarlaAccordion from "../components/TarlaAccordion";


export default function Home() {
  return (
    <Layout>
      <Slideshow />
      <TarlaAccordion />
      <ShortDetay />
      <Contact />
    </Layout>
  )
}
