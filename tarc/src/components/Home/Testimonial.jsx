import React from 'react';
import Heading from '../Heading';
import Paragraph from '../Paragraph';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Testimonial() {
  const testimonials = [
    {
      name: 'Mr. Baldev Varma',
      project: 'TARC Tripundra',
      text: 'Mr. Baldev Varma, shares his extraordinary firsthand experience of TARC Tripundra.',
      image: './assets/images/home/testimonial/testimonial_1.jpg',
    },
     {
      name: 'Mr. Baldev Varma',
      project: 'TARC Tripundra',
      text: 'Mr. Baldev Varma, shares his extraordinary firsthand experience of TARC Tripundra.',
      image: './assets/images/home/testimonial/testimonial_1.jpg',
    },
     {
      name: 'Mr. Baldev Varma',
      project: 'TARC Tripundra',
      text: 'Mr. Baldev Varma, shares his extraordinary firsthand experience of TARC Tripundra.',
      image: './assets/images/home/testimonial/testimonial_1.jpg',
    },
    {
      name: 'Ms. Jane Doe',
      project: 'TARC Residency',
      text: 'Ms. Jane Doe shares her wonderful journey with TARC Residency.',
      image: './assets/images/home/testimonial/testimonial_1.jpg',
    },
  ];

  return (
    <section className="py_section relative overflow-hidden border-t-[var(--secondary-color)] border-t-[1px]">
      <div className="container">
        <div className="text-center">
          <Heading Heading={'Voices of Trust'} />
          <Heading Heading={'Hear from Our Community'} />
        </div>
        <div className="my-[30px]">
          <img
            src="./assets/icons/design_icon.png"
            alt="Design"
            width={'80'}
            className="m-[auto]"
          />
          <div className="m-[auto] pt-[30px] lg:pt-[80px]">
            <Swiper
              modules={[Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                prevEl: '.prev_arrow',
                nextEl: '.next_arrow',
              }}
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="grid grid-cols-1 p-[20px] lg:p-0   lg:grid-cols-12">
                    <div className="col-span-6 lg:block hidden lg:col-span-4 m-[auto]">
                      <h3 className="font-baskerville uppercase text-[24px] text-primary mb-[8px]">
                        {testimonial.name}
                      </h3>
                      <span className="text-[#AA8A80] text-[14px]">
                        {testimonial.project}
                      </span>
                      <div className="arrow_container flex justify-end mt-[35px] gap-[10px]">
                        <div className="prev_arrow bg-[var(--primary-color)] h-[35px] w-[35px] rounded-[50%] cursor-pointer">
                          <img
                            src="./assets/icons/right_arrow.svg"
                            className="h-[100%] w-[100%]"
                            alt="Previous"
                          />
                        </div>
                        <div className="next_arrow bg-[var(--primary-color)] rotate-[180deg] h-[35px] w-[35px] rounded-[50%] cursor-pointer">
                          <img
                            src="./assets/icons/right_arrow.svg"
                            className="h-[100%] w-[100%]"
                            alt="Next"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-span-6 lg:col-span-4 ">
                      <div className="relative">
                        <img
                          src="./assets/images/small_bg_texture.png"
                          className="absolute top-[-30px] left-[-30px]"
                          alt="testimonial"
                        />
                        <img
                          src={testimonial.image}
                          className="w-[100%] z-[1] relative"
                          alt="testimonial"
                        />
                        <div className="border-[1px] border-[var(--secondary-color)] absolute h-[100%] top-[62%] right-[-30px] translate-y-[-50%] w-[100%]"></div>
                      </div>
                    </div>
                    <div className="col-span-6 lg:col-span-4 mt-[50px]  lg:m-[auto] lg:w-[70%]">
                      <h3 className="font-baskerville lg:hidden block uppercase text-[24px] text-primary mb-[8px]">
                        {testimonial.name}
                      </h3>
                      <Paragraph
                        className={'text-[16px] lg:w-[80%] ml-[auto] capitalize'}
                        text={testimonial.text}
                        
                      />
                      
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
                <div className="arrow_container lg:hidden flex  justify-center lg:justify-end mt-[35px] gap-[10px]">
                        <div className="prev_arrow bg-[var(--primary-color)] h-[35px] w-[35px] rounded-[50%] cursor-pointer">
                          <img
                            src="./assets/icons/right_arrow.svg"
                            className="h-[100%] w-[100%]"
                            alt="Previous"
                          />
                        </div>
                        <div className="next_arrow bg-[var(--primary-color)] rotate-[180deg] h-[35px] w-[35px] rounded-[50%] cursor-pointer">
                          <img
                            src="./assets/icons/right_arrow.svg"
                            className="h-[100%] w-[100%]"
                            alt="Next"
                          />
                        </div>
                      </div>
          </div>
        </div>
      </div>
    </section>
  );
}