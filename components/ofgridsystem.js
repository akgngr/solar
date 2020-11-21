import { Col, Row } from "react-bootstrap"

const ofgridsystem = () => {
    return(
        <Row className="pt-5">
            <Col lg={12}>
                <h2>Şebekeden Bağımsız Off-Grid Sistemler</h2>
                <p>Şebekenin bulunmadığı yerlerde ihtiyaç duyulan enerjinin tamamının güneşten karşılandığı projelerdir. Bu sistemlerde fotovoltaik(PV) paneller ile üretilen elektrik enerjisi akülerde depolanır ve kullanıcı enerji ihtiyacını (gece-gündüz) bu akülerden sağlar. Sistemin kapasitesi, otonomi süresi boyunca (güneşten elektrik üretilemediği süreç) kullanıcının ihtiyacını karşılayacak şekilde boyutlandırılabilir. Burada profesyonel bir çalışma yapmak çok önemlidir. Tüketim cihazlarının ve bunların ne kadar enerji tükettiğinin iyi analiz edilmesi gerekmektedir. Gerekirse yedekleme süresi biraz uzun tutularak güneşin olmadığı günlerde de enerji kesintisinin önüne geçilir. Bu sistemler jeneratörle kıyaslandığında çok mantıklı ticari sonuçlar doğurmakta ve bu yatırımlar çok kısa sürede kendini amorti edebilmektedir.</p>
            </Col>
        </Row>
    )
}

export default ofgridsystem