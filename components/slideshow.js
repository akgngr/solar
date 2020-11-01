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
                <SwiperSlide> <div className="slides slide1">
                    <div className="content">
                        <h2 className='text-uppercase'>Derviş Solar</h2>
                        <p className='font-weight-lighter text-muted'>Lorem ipsum dolar sit amed.</p>
                        <span />
                        <small className="text-muted font-weight-lighter">www.dervissolar.com - info@dervissolar.com</small>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide> <div className="slides slide2">
                    <div className="content">
                        <h2 className='text-uppercase'>Derviş Solar</h2>
                        <p className='font-weight-lighter text-muted'>Lorem ipsum dolar sit amed.</p>
                        <span />
                        <small className="text-muted font-weight-lighter">www.dervissolar.com - info@dervissolar.com</small>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide> <div className="slides slide3">
                    <div className="content">
                        <h2 className='text-uppercase'>Derviş Solar</h2>
                        <p className='font-weight-lighter text-muted'>Lorem ipsum dolar sit amed.</p>
                        <span />
                        <small className="text-muted font-weight-lighter">www.dervissolar.com - info@dervissolar.com</small>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide> <div className="slides slide4">
                    <div className="content">
                        <h2 className='text-uppercase'>Derviş Solar</h2>
                        <p className='font-weight-lighter text-muted'>Lorem ipsum dolar sit amed.</p>
                        <span />
                        <small className="text-muted font-weight-lighter">www.dervissolar.com - info@dervissolar.com</small>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide> <div className="slides slide5">
                    <div className="content">
                        <h2 className='text-uppercase'>Derviş Solar</h2>
                        <p className='font-weight-lighter text-muted'>Lorem ipsum dolar sit amed.</p>
                        <span />
                        <small className="text-muted font-weight-lighter">www.dervissolar.com - info@dervissolar.com</small>
                    </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default SlideShow