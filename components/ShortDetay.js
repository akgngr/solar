import {Card, Container} from "react-bootstrap";

import SwiperCore, { Pagination, A11y, Navigation, Autoplay } from 'swiper';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// install Swiper components
SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);

//Svg icons
import Parmak from "./svg/parmak";
import Clock from "./svg/clock";
import Invo from "./svg/invo";
import Credi from "./svg/Credi";
import Pompa from "./svg/Pompa";
import Panel from "./svg/Panel";

function ShortDetay () {
    return (
        <section id="short-detay" className="short-detay pt-5 pb-5 text-center">
            <Container fluid>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={4}
                    navigation
                    zoom={ true }
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false
                    }}
                    breakpoints= {{
                        // when window width is >= 320px
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 20
                        },
                        // when window width is >= 480px
                        480: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        },
                        // when window width is >= 640px
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 40
                        }
                    }}
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide>
                        <Card>
                            <Parmak />
                            <Card.Body>
                                <Card.Title>2 günde teslim</Card.Title>
                                <Card.Text>Proje onaylandıktan sonra 2 iş gününde teslim edilir.</Card.Text>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card>
                            <Clock />
                            <Card.Body>
                                <Card.Title>Kesintisiz Elektrik</Card.Title>
                                <Card.Text>Yayla evlerinde yeterli pil gücü bulunduktan sonra 24 saat kesintisiz elektrik imkanı. Tarla sulamalarında günde 10 saat kesintisiz sulama.</Card.Text>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card>
                            <Invo />
                            <Card.Body>
                                <Card.Title>Faturasız Bir Hayat</Card.Title>
                                <Card.Text>Yüklü miktarda gelen elektirik faturası sorununa son.</Card.Text>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card>
                            <Credi />
                            <Card.Body>
                                <Card.Title>Sıfır Faizli Kredi İmkanı</Card.Title>
                                <Card.Text>5 yıl vadeli sıfır faizli kredi imkanı.</Card.Text>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card>
                            <Pompa />
                            <Card.Body>
                                <Card.Title>Mazot giderine son</Card.Title>
                                <Card.Text>Gerek yayla evlerindeki jeneratör yakıtları gerekse sulamada kullanılan pompaların yakıtlarına son verin.</Card.Text>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card>
                            <Panel />
                            <Card.Body>
                                <Card.Title>25 yıl panel garantisi</Card.Title>
                                <Card.Text>Panellerimiz 25 yıl garantilidir.</Card.Text>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>
                </Swiper>
            </Container>
        </section>
    )
}

export default ShortDetay;