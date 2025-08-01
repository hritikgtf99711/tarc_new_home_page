import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Heading from '../Heading';
import Paragraph from '../Paragraph';
import Commonbtn from '../Commonbtn';

export default function LuxurySec() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.luxury-sec h2', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.luxury-sec',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });
    gsap.from('.luxury-sec .content_cont p', {
      opacity: 0,
      x: -50,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.luxury-sec .content_cont',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      delay: 0.4,
    });

    gsap.from('.luxury-sec .content_cont button', {
      opacity: 0,
      scale: 0.8,
      duration: 0.8,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: '.luxury-sec .content_cont',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      delay: 0.6,
    });

    gsap.from('.luxury-sec .img_container img', {
      opacity: 0,
      x: 50,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.luxury-sec .img_container',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      delay: 0.2,
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      gsap.killTweensOf('.luxury-sec h2, .luxury-sec .content_cont p, .luxury-sec .content_cont button, .luxury-sec .img_container img');
    };
 
  },[]);
  
  return (
    <section className='py_section luxury-sec'>
      <div className='container'>
        <div className='grid grid-cols-6 lg:grid-cols-12 xl:w-[85%] m-[auto]'>
          <div className='col-span-6 m-auto'>
            <Heading Heading={'TARC LUXURY'} />
            <Heading Heading={'Creating Space for the Mind'} />
            <div className='xl:w-[70%] content_cont ml-[auto]'>
              <Paragraph className='lg:my-[50px]' text={'Luxury is equated with sheer opulence, magnificence, or aesthetic allure. Yet, TARC transcends this surface definition. Embracing luxury that deeply resonates with the soul, cherishes genuine human connection and fosters inner peace, TARC emerges as a brand profoundly attuned to the intangible facets of luxury.'} />
              <Commonbtn className='lg:mt-[100px] mt-[30px]' />
            </div>
          </div>
          <div className='lg:block hidden col-span-1'>
          </div>
          <div className='lg:col-span-5 col-span-12 lg:mt-0 mt-[30px]'>
            <figure className='img_container'>
              <img src='./assets/images/home/image_banner_4.jpg' className='w-[100%]' alt='' />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}