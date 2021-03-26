import Layout from '../components/layout'
import Slideshow from "../components/slideshow";
import ShortDetay from "../components/ShortDetay";
import Contact from "../components/Contact";
import WhySolarEnergy from "../components/WhySolarEnergy";
import Tarla from "../components/Tarla";
import YaylaEvi from "../components/yaylaevi";
import Anasayfailetisim from '../components/bizimleiletisimegec'
import Seo from '../components/seo'

export default function Home() {
  return (
    <Layout>
      <Seo 
        title = "Derviş Solar"
        description = "Derviş Solar Sistemleri, Hatay’ın Hassa İlçesine Bağlı Aktepe Mahallesinde kurulmuştur. Güneş ışığını elektrik enerjisine dönüştüren yüksek performanslı solar sistemler kurmaktadır."
        metakey = "güneş enerjisi, ücretsiz elektrik, güneş enerji ile tarla sulama, güneş panelleri"
      />
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
