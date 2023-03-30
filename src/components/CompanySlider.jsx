import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { companyLogo, templateImages } from '../constants/data';



const CompanySlider = ({ themeToggling }) => {

  return (
    <section className='p-6 pb-14 lg:px-16 text-center dark:bg-[#2F1B58] dark:text-gray-200'>
      <p className='text-sm py-4'>Provided Templates</p>
      <h2 className='text-3xl'>Built on S-Templates</h2>

      <div>
        <Swiper
          className="py-12 flex items-center justify-center"
          // slidesPerView={3}
          // spaceBetween={10}
          modules={[Pagination, Navigation, Autoplay]}
          centeredSlides={true}
          loop={true}
          // navigation={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
        >
          {
            templateImages.map(img => (
              // console.log(img.darkImg)
              <SwiperSlide key={img.id}>
                <div className="flex items-center justify-center relative rounded overflow-hidden flex-col">
                  {/* <div className='w-1 h-8 bg-black dark:bg-gray-400'></div> */}
                  <div className="slider-item">
                    <span className="info-label">
                      <span className="cost-label"><span className='line-through'>{img.oldPrice}</span>&nbsp;&nbsp;<span className='font-bold'>{img.currentPrice}</span></span>
                      <span className="rate-label">

                      </span>
                    </span>
                    <span className='detail-label'>
                      <p><span className='font-bold'>27.6K</span> sales</p>
                      <p>Last Updated: {img.date}</p>
                    </span>
                  </div>
                  <img src={img.darkImg} alt="" />
                  <div className='item-action'>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                      </svg>
                    </span>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                      </svg>
                    </span>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                      </svg>
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </section>
  )
}

export default CompanySlider