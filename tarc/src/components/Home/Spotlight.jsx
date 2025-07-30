import React from "react";
import Heading from "../Heading";
import Paragraph from "../Paragraph";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { useRef, useState, useEffect } from "react";

import { Pagination, Navigation } from "swiper/modules";
export default function Spotlight() {
  const [slideRange, setSlideRange] = useState("1-3"); 
  const swiperRef = useRef(null);

  const updateSlideRange = (swiper) => {
    const slidesPerView = 3; // Matches slidesPerView in Swiper config
    const totalSlides = swiper.slides.length;
    const activeIndex = swiper.realIndex; // Use realIndex for looped slides
    const firstVisibleSlide = activeIndex + 1; // 1-based index for display
    const lastVisibleSlide = Math.min(activeIndex + slidesPerView, totalSlides);
    setSlideRange(`${firstVisibleSlide}-${lastVisibleSlide}`);
  };

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.on("slideChange", () =>
        updateSlideRange(swiperRef.current)
      );
    }
  }, []);
  return (
    <section className="border-[1px] lg:py-0 py-[80px] relative border-[var(--secondary-color)] ">
        <img src="./assets/images/home/newsletter/newsletter_bg.jpg" alt="bg" className="absolute top-0 left-0 h-[100%] w-[100%]"/>
      <div className="grid grid-cols-1 lg:grid-cols-12  lg:h-[100vh]   relative">
        <div className="col-span-6 border-r-[1px] border-r-[var(--secondary-color)]">
          <div className="lg:py-[60px] lg:!px-[90px] px-[20px]">
            <Heading Heading={" TARC in the Spotlight"} />
           
            <div className="lg:py-[38px] pt-[30px] relative overflow-hidden lg:pl-[15px]">
               <img src="./assets/images/xsmall_bg_texture.png"
                          className="absolute top-[55%] translate-y-[-50%] w-[210px] left-[0]"
                          alt="testimonial"
                        />
              <Swiper
                modules={[Pagination, Navigation]}
                pagination={{
                  type: "progressbar",
                  el: ".swiper-progress-bar",
                }}
                spaceBetween={30}
                slidesPerView={3}
                navigation={{
                  prevEl: ".prev-arrow",
                  nextEl: ".next-arrow",
                }}
                loop={true} 
                onSwiper={(swiper) => {
                  swiperRef.current = swiper; 
                  updateSlideRange(swiper); 
                }}
                  breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                1367: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              >
                {[
                  {
                    id: 1,
                    src: "./assets/images/home/newsletter/news_letter_img_1.jpg",
                    
                  },
                  {
                    id: 2,
                    src: "./assets/images/home/newsletter/news_letter_img_2.jpg",
                   
                  },
                  {
                    id: 3,
                    src: "./assets/images/home/newsletter/news_letter_img_3.jpg",
                    
                  },
                  {
                    id: 4,
                    src: "./assets/images/home/newsletter/news_letter_img_4.jpg",
                    
                  },
                  {
                    id: 5,
                    src: "./assets/images/home/newsletter/news_letter_img_1.jpg",
                    
                  },
                  {
                    id: 6,
                    src: "./assets/images/home/newsletter/news_letter_img_2.jpg",
                   
                  },
                  {
                    id: 7,
                    src: "./assets/images/home/newsletter/news_letter_img_3.jpg",
                    
                  },
                  {
                    id: 8,
                    src: "./assets/images/home/newsletter/news_letter_img_4.jpg",
                    
                  },
                  {
                    id: 9,
                    src: "./assets/images/home/newsletter/news_letter_img_1.jpg",
                    
                  },
                  {
                    id: 10,
                    src: "./assets/images/home/newsletter/news_letter_img_2.jpg",
                   
                  },
                  {
                    id: 11,
                    src: "./assets/images/home/newsletter/news_letter_img_3.jpg",
                    
                  },
                  {
                    id: 12,
                    src: "./assets/images/home/newsletter/news_letter_img_4.jpg",
                    
                  },
                ].map((slide,index) => (
                  <SwiperSlide key={slide.id}>
                    <div className="slider_item">
                        
                      <span className="text-[#8B5949] block mb-[25px] text-[18px]">
({(index + 1).toString().padStart(2, '0')})                      </span>
                      <img
                        className="border-[1px] w-[100%] p-[5px] border-[#AA8A80]"
                        src={slide.src}
                        alt={`Slide ${slide.id}`}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="arrow_container flex place-items-center relative lg:justify-end justify-center mt-[20px] lg:mt-[35px] gap-[10px]">
                <div className="prev-arrow bg-[var(--primary-color)] h-[35px] w-[35px] rounded-[50%] cursor-pointer">
                  <img
                    src="./assets/icons/right_arrow.svg"
                    className="h-[100%] w-[100%]"
                    alt="Previous"
                  />
                </div>
                <div className="progress-container basis-[200px] relative flex justify-between items-center">
                  <div className="swiper-progress-bar !h-[1px]">
                    <span className="progress"></span>
                  </div>
                </div>
                <div className="next-arrow bg-[var(--primary-color)] rotate-[180deg] h-[35px] w-[35px] rounded-[50%] cursor-pointer">
                  <img
                    src="./assets/icons/right_arrow.svg"
                    className="h-[100%] w-[100%]"
                    alt="Next"
                  />
                </div>
                <span className="absolute translate-x-[-50%] text-[var(--primary-color)] bottom-[-32px] right-[18%]">
                  {slideRange}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-6  lg:mt-[auto] mt-[40px]">
          <img
            src="./assets/icons/quote.svg"
            alt="quote"
            className="absolute top-[10px]  right-[280px]"
          />
          <div className="lg:py-[60px]  lg:!px-[90px] px-[20px]">
            <ul className="lg:mb-[40px] mb-[20px]">
              <li className="mb-[8px]">
                <span className="text-primary font-[500] me-4">
                  Publication:
                </span>
                <span> The Economic Times</span>
              </li>
              <li className="">
                <span className="text-primary font-[500] me-4">Date:</span>
                <span> 25 feb 2025</span>
              </li>
            </ul>
            <div className="mt-[20px]">
              <Heading
                className={`font-libre-baskerville !text-[24px]`}
                Heading={
                  " TARC reports highest ever annual sales of Rs 3,722 crore in FY25"
                }
              />
              <div className="w-[100%] h-[1px] my-[30px] bg-[var(--secondary-color)]"></div>
              <Paragraph
                text={
                  "New Delhi: Realty developer TARC Ltd is expecting Rs 2,000 crore revenue from the next phase of its two projects - Ishva and Kailasa, Amar Sari.."
                }
              />
              <a    
                href=""
                className="text-primary capitalize flex place-items-center mt-[15px]"
              >
                <span className="me-[8px]">read more </span>
                <img src="./assets/icons/arrow-right.png" width={"20"} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
