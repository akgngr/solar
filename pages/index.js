import Layout from '../components/layout'
import Slideshow from "../components/slideshow";
import ShortDetay from "../components/ShortDetay";
import Contact from "../components/Contact";
import WhySolarEnergy from "../components/WhySolarEnergy";
import Tarla from "../components/Tarla";
import YaylaEvi from "../components/yaylaevi";
import Anasayfailetisim from '../components/bizimleiletisimegec'

export default function Home() {
  return (
    <Layout>
      <Slideshow />
      <Contact />
      <Tarla />
      <ShortDetay />
      <YaylaEvi />
      <Anasayfailetisim />
      <WhySolarEnergy />
    </Layout>
  )
}
