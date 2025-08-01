import React, { useRef, useState, useEffect } from "react";
import Heading from "../Heading";
import Paragraph from "../Paragraph";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Spotlight() {
  const [slideRange, setSlideRange] = useState("1-3");
  const swiperRef = useRef(null);
  const sectionRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);

  const updateSlideRange = (swiper) => {
    const slidesPerView = 3;
    const totalSlides = swiper.slides.length;
    const activeIndex = swiper.realIndex;
    const firstVisibleSlide = activeIndex + 1;
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

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(leftColRef.current.querySelector(".heading"), {
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".slider_item", {
        opacity: 0,
        y: 40,
        scale: 0.95,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".arrow_container .prev-arrow, .arrow_container .next-arrow", {
        opacity: 0,
        scale: 0.7,
        rotation: 15,
        stagger: 0.1,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".arrow_container .progress-container", {
        opacity: 0,
        width: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(rightColRef.current.querySelector("img"), {
        opacity: 0,
        scale: 0.3,
        rotation: -45,
        duration: 1.2,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
          trigger: rightColRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(rightColRef.current.querySelectorAll("ul, .heading, .paragraph, a"), {
        opacity: 0,
        x: 60,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rightColRef.current,
          start: "top 65%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="border-[1px] lg:py-0 py-[80px] relative border-t-[1px]  border-y-0 border-[#aa8a8057]"
    >
      <img
        src="./assets/images/home/newsletter/newsletter_bg.png"
        alt="bg"
        className="absolute top-0 left-0 h-[100%] w-[100%]"
      />
      <div className="grid grid-cols-1 lg:grid-cols-12 lg:h-[100vh] relative">
        <div ref={leftColRef} className="col-span-6 border-r-[1px] border-r-[#aa8a8057]">
          <div className="lg:py-[60px] lg:!px-[90px] px-[20px]">
            <Heading className="heading" Heading={"TARC in the Spotlight"} />
            <div className="lg:py-[38px] lg:pt-[30px] pt-[30px] relative overflow-hidden lg:pl-[15px]">
              <img
                src="./assets/images/xsmall_bg_texture.png"
                className="absolute top-[47%] translate-y-[-50%] w-[210px] left-[0]"
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
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  1367: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
              >
                {[
                  { id: 1, src: "./assets/images/home/newsletter/news_letter_img_1.jpg" },
                  { id: 2, src: "./assets/images/home/newsletter/news_letter_img_2.jpg" },
                  { id: 3, src: "./assets/images/home/newsletter/news_letter_img_3.jpg" },
                  { id: 4, src: "./assets/images/home/newsletter/news_letter_img_4.jpg" },
                  { id: 5, src: "./assets/images/home/newsletter/news_letter_img_1.jpg" },
                  { id: 6, src: "./assets/images/home/newsletter/news_letter_img_2.jpg" },
                  { id: 7, src: "./assets/images/home/newsletter/news_letter_img_3.jpg" },
                  { id: 8, src: "./assets/images/home/newsletter/news_letter_img_4.jpg" },
                  { id: 9, src: "./assets/images/home/newsletter/news_letter_img_1.jpg" },
                  { id: 10, src: "./assets/images/home/newsletter/news_letter_img_2.jpg" },
                  { id: 11, src: "./assets/images/home/newsletter/news_letter_img_3.jpg" },
                  { id: 12, src: "./assets/images/home/newsletter/news_letter_img_4.jpg" },
                ].map((slide, index) => (
                  <SwiperSlide key={slide.id}>
                    <div className="slider_item">
                      <span className="text-[#8B5949] block mb-[50px] text-[18px]">
                        ({(index + 1).toString().padStart(2, "0")})
                      </span>
                      <img
                        className="border-[1px] w-[100%] p-[5px] border-[#AA8A80]"
                        src={slide.src}
                        alt={`Slide ${slide.id}`}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="arrow_container  relative z-[9999] flex place-items-center relative lg:justify-end justify-center mt-[20px] lg:mt-[90px] gap-[10px]">
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
        <div ref={rightColRef} className="col-span-6 lg:mt-[auto] mt-[40px]">
          <div className="lg:py-[60px] relative lg:!mx-[30px] px-[20px]">
            <img
              src="./assets/icons/quote.svg"
              alt="quote"
              className="absolute top-[-50px] left-[18px]"
            />
            <ul className="lg:mb-[40px] mb-[20px]">
              <li className="mb-[8px]">
                <span className="text-primary font-[500] me-4">Publication:</span>
                <span>The Economic Times</span>
              </li>
              <li className="">
                <span className="text-primary font-[500] me-4">Date:</span>
                <span>25 Feb 2025</span>
              </li>
            </ul>
            <div className="mt-[20px]">
              <Heading
                className="font-libre-baskerville !text-[18px] lg:!text-[22px]"
                Heading={"TARC reports highest ever annual sales of Rs 3,722 crore in FY25"}
              />
              <div className="w-[100%] h-[1px] my-[20px] lg:my-[30px] bg-[#aa8a8057]"></div>
              <Paragraph
                className="paragraph"
                text={
                  "New Delhi: Realty developer TARC Ltd is expecting Rs 2,000 crore revenue from the next phase of its two projects - Ishva and Kailasa, Amar Sari.."
                }
              />
              <a
                href=""
                className="text-primary capitalize flex place-items-center mt-[15px]"
              >
                <span className="me-[8px]">read more</span>
                <img src="./assets/icons/arrow-right.png" width={"20"} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}