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
        </section>
    );
};

export default SlideShow