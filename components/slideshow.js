import SwiperCore, { Pagination, A11y, Navigation } from 'swiper';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {Container} from "react-bootstrap";

// install Swiper components
SwiperCore.use([Navigation, Pagination, A11y]);


function SlideShow () {
    return (
        <section>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
            >
                <SwiperSlide> <div className="slides slide1"> <div className="content"> <h2>Derviş Solar</h2><p>Lorem ipsum dolar sit amed.</p> </div> </div> </SwiperSlide>
                <SwiperSlide> <div className="slides slide2"> <div className="content"> <h2>Derviş Solar</h2><p>Lorem ipsum dolar sit amed.</p> </div> </div> </SwiperSlide>
                <SwiperSlide> <div className="slides slide3"> <div className="content"> <h2>Derviş Solar</h2><p>Lorem ipsum dolar sit amed.</p> </div> </div> </SwiperSlide>
                <SwiperSlide> <div className="slides slide4"> <div className="content"> <h2>Derviş Solar</h2><p>Lorem ipsum dolar sit amed.</p> </div> </div> </SwiperSlide>
            </Swiper>

            <style jsx>{`
                .slides{
                    height: 84vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .content {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    color: #ffffff;
                    text-align: center;
                    width: 70vw;
                    height: 50vh;
                    background-color: #55606585;
                    padding: 30px;
                }
                .slide1{
                    background: url('/images/green-living_t20_RwWnra.jpg');
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center;
                }
                .slide2{
                    background: url('/images/solar-cell-panel-for-supply-energy-to-agriculture-farm-or-green-house-plantation-solar-energy-solar_t20_jLPm6k.jpg');
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center;
                }
                .slide3{
                    background: url('/images/solar-panels-on-the-roof-of-the-house-alternative-system-house-renewable-panel-tech-green-roof-cell_t20_Ky6zp3.jpg');
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center;
                }
                .slide4{
                    background: url('/images/tarimsal-sulama.jpg');
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center;
                }
            `}</style>
        </section>
    );
};

export default SlideShow