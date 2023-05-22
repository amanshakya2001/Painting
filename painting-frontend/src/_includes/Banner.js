
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Autoplay, Navigation } from "swiper";
export default function Banner({data}) {
    return (
      <>
      <section className="hero-banner text-dark">
        <div className="container">
            <Swiper navigation={true} modules={[Navigation,Autoplay]} loop={true} autoplay={{delay: 2000,disableOnInteraction: false,}} className="mySwiper">
                {data.map((element,index)=>{
                  return(
                    <SwiperSlide key={element.name}>
                      <img src={element.url} alt={element.name} className="img-fluid"/>
                    </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
      </section>
      </>
    );
  } 