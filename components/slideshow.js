import SwiperCore, { Pagination, A11y } from 'swiper';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// install Swiper components
SwiperCore.use([Pagination, A11y]);


function SlideShow (props) {

    return (
        <section className='slides'>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
            >
                <SwiperSlide>
                    <div className="slides slide1">
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slides slide2">
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slides slide3">
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slides slide4">
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slides slide5">
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default SlideShow