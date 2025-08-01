import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Heading from '../Heading';
import Paragraph from '../Paragraph';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

gsap.registerPlugin(ScrollTrigger);

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

  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const headings = headingRef.current.querySelectorAll('h2');
    headings.forEach((heading, index) => {
      const letters = heading.textContent.split('');
      heading.innerHTML = letters.map(letter => `<span class="letter">${letter}</span>`).join('');
      gsap.from(heading.querySelectorAll('.letter'), {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.03,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        delay: index * 0.3,
      });
    });

    gsap.from('.design-icon', {
      opacity: 0,
      scale: 0.8,
      duration: 0.8,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: swiperRef.current,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });

    const slides = swiperRef.current.querySelectorAll('.swiper-slide');
    slides.forEach((slide, index) => {
      const image = slide.querySelector('.testimonial-image');
      const text = slide.querySelector('p');
      const name = slide.querySelector('.name');
      const project = slide.querySelector('.project');

      gsap.from(image, {
        opacity: 0,
        scale: 1.1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: slide,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        delay: index * 0.2,
      });

      image.addEventListener('mouseenter', () =>
        gsap.to(image, { scale: 1.05, duration: 0.3, ease: 'power2.out' })
      );
      image.addEventListener('mouseleave', () =>
        gsap.to(image, { scale: 1, duration: 0.3, ease: 'power2.out' })
      );

      gsap.from([name, project, text], {
        opacity: 0,
        x: -50,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: slide,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        delay: index * 0.2 + 0.3,
      });

      const bgTexture = slide.querySelector('.bg-texture');
      gsap.to(bgTexture, {
        y: '15%',
        ease: 'none',
        scrollTrigger: {
          trigger: slide,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.5,
        },
      });
    });

    const arrows = swiperRef.current.querySelectorAll('.arrow_container .prev_arrow, .arrow_container .next_arrow');
    arrows.forEach((arrow, index) => {
      gsap.from(arrow, {
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: swiperRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        delay: 0.5 + index * 0.2,
      });

      arrow.addEventListener('mouseenter', () =>
        gsap.to(arrow, { scale: 1.2, duration: 0.3, ease: 'power2.out' })
      );
      arrow.addEventListener('mouseleave', () =>
        gsap.to(arrow, { scale: 1, duration: 0.3, ease: 'power2.out' })
      );
    });

    return () => {
      slides.forEach(slide => {
        const image = slide.querySelector('.testimonial-image');
        image.removeEventListener('mouseenter', () => {});
        image.removeEventListener('mouseleave', () => {});
      });
      arrows.forEach(arrow => {
        arrow.removeEventListener('mouseenter', () => {});
        arrow.removeEventListener('mouseleave', () => {});
      });
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      gsap.killTweensOf([
        headingRef.current.querySelectorAll('.letter'),
        '.design-icon',
        swiperRef.current.querySelectorAll('.testimonial-image, .bg-texture, p, .name, .project, .prev_arrow, .next_arrow'),
      ]);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className='py_section relative z-[999] overflow-hidden border-t-[#aa8a8057] border-t-[1px] testimonial-sec'
    >
      <div className='container'>
        <div ref={headingRef} className='text-center'>
          <Heading Heading={'Voices of Trust'} />
          <Heading Heading={'Hear from Our Community'} />
        </div>
        <div className='my-[30px]' ref={swiperRef}>
          <img
            src='./assets/icons/design_icon.png'
            alt='Design icon'
            width='50'
            className='m-[auto] design-icon'
          />
          <div className='m-[auto] pt-[30px] lg:pt-[80px]'>
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
                  <div className='grid grid-cols-1 p-[20px] lg:p-0 lg:grid-cols-12'>
                    <div className='col-span-6 lg:block hidden lg:col-span-4 m-[auto]'>
                      <h3 className='font-baskerville uppercase text-[24px] text-primary mb-[8px] name'>
                        {testimonial.name}
                      </h3>
                      <span className='text-[#AA8A80] text-[14px] project'>{testimonial.project}</span>
                      <div className='arrow_container   relative z-[999999]  flex justify-end mt-[35px] gap-[10px]'>
                        <div className='prev_arrow bg-[var(--primary-color)] h-[35px] w-[35px] rounded-[50%] cursor-pointer'>
                          <img
                            src='./assets/icons/right_arrow.svg'
                            className='h-[100%] w-[100%]'
                            alt='Previous slide'
                          />
                        </div>
                        <div className='next_arrow bg-[var(--primary-color)] rotate-[180deg] h-[35px] w-[35px] rounded-[50%] cursor-pointer'>
                          <img
                            src='./assets/icons/right_arrow.svg'
                            className='h-[100%] w-[100%]'
                            alt='Next slide'
                          />
                        </div>
                      </div>
                    </div>
                    <div className='col-span-6 lg:col-span-4'>
                      <div className='relative'>
                       <div
  className="absolute inset-0 top-[calc(0)] z-0 top-[-58px] left-[-130px] h-[323px] bg-repeat w-[90%] m-[auto]  mt-2 "
  style={{
   backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 10 10' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='0' y='10' font-size='10' fill='%23AA8A80'%3E+%3C/text%3E%3C/svg%3E")`,
  }}
></div>
                        <img
                          src={testimonial.image}
                          className='w-[100%] z-[1] relative testimonial-image'
                          alt={`${testimonial.name} testimonial`}
                        />
                        <div className='border-[1px] border-[var(--secondary-color)] absolute h-[100%] top-[60%] right-[-30px] translate-y-[-50%] w-[100%]'></div>
                      </div>
                    </div>
                    <div className='col-span-6 lg:col-span-4 mt-[50px] lg:m-[auto] lg:w-[70%]'>
                      <h3 className='font-baskerville lg:hidden block uppercase text-[24px] text-primary mb-[8px] name'>
                        {testimonial.name}
                      </h3>
                      <Paragraph
                        className='text-[16px] lg:w-[80%] ml-[auto] capitalize'
                        text={testimonial.text}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className='arrow_container relative z-[2] lg:hidden flex justify-center lg:justify-end mt-[35px] gap-[10px]'>
              <div className='prev_arrow bg-[var(--primary-color)] h-[35px] w-[35px] rounded-[50%] cursor-pointer'>
                <img
                  src='./assets/icons/right_arrow.svg'
                  className='h-[100%] w-[100%]'
                  alt='Previous slide'
                />
              </div>
              <div className='next_arrow bg-[var(--primary-color)] rotate-[180deg] h-[35px] w-[35px] rounded-[50%] cursor-pointer'>
                <img
                  src='./assets/icons/right_arrow.svg'
                  className='h-[100%] w-[100%]'
                  alt='Next slide'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}