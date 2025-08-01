import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Heading from '../Heading';
import Paragraph from '../Paragraph';

export default function LeadershipSec() {
  const sectionRef = useRef(null);
  const leadersContainerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const section = sectionRef.current;

      gsap.from('.background-img', {
        opacity: 0,
        scale: 1.1,
        duration: 2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
      });
      gsap.from('.line_heading h2', {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '.line_heading',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });

      gsap.from('.line_heading span', {
        scaleX: 0,
        transformOrigin: 'left',
        duration: 1.2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '.line_heading',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
        delay: 0.4,
      });

      const mainHeading = section.querySelector('.main-heading h2');
      if (mainHeading) {
        const letters = mainHeading.textContent.split('');
        mainHeading.innerHTML = letters
          .map(letter => `<span class="letter">${letter}</span>`)
          .join('');
        gsap.from(mainHeading.querySelectorAll('.letter'), {
          opacity: 0,
          y: 25,
          rotationX: 45,
          duration: 0.8,
          stagger: 0.04,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.main-heading',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        });
      }

      const figures = section.querySelectorAll('.leader-figure');
      figures.forEach((figure, index) => {
        const img = figure.querySelector('img');
        gsap.from(img, {
          opacity: 0,
          x: 80,
          scale: 0.9,
          duration: 1.4,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: figure,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          delay: index * 0.5,
        });

        gsap.from(figure.querySelector('figcaption'), {
          opacity: 0,
          y: 40,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: figure,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          delay: index * 0.5 + 0.4,
        });

      });

      gsap.from('.content-container p, .content-container a', {
        opacity: 0,
        y: 50,
        scale: 0.9,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: leadersContainerRef.current,
          start: 'bottom 80%',
          toggleActions: 'play none none reverse',
        },
      });
    }, sectionRef);

    // Cleanup
    return () => {
      const figures = sectionRef.current.querySelectorAll('.leader-figure');
     
      ctx.revert();
    };
  }, []);

  return (
    <section className='py_section leadership-sec' ref={sectionRef}>
      <img
        src='./assets/images/leadership_bg.jpg' 
        alt='Background'
        className='background-img absolute top-0 left-0 w-[100%] h-[100%] object-cover opacity-50'
      />
      <div className='container relative'>
        <div className='grid grid-cols-6 lg:grid-cols-12'>
          <div className='col-span-3'></div>
          <div className='col-span-1'></div>
          <div className='col-span-7'>
            <div className='line_heading lg:flex hidden place-items-center'>
              <Heading Heading={'our leadership'} />
              <span className='w-[100%] h-[0.8px] ml-[30px] block bg-[var(--primary-color)] flex-1'></span>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-6 lg:grid-cols-12 lg:pt-[60px]'>
          <div className='lg:col-span-3 col-span-6'>
            <div className='main-heading'>
              <Heading
                className={'!leading-[36px] mb-[30px]'}
                Heading={
                  <span>
                    guiding tarc <span className='lg:block hidden'></span> to new horizons
                  </span>
                }
              />
            </div>
            <div className='lg:w-[65%] ml-[auto] content-container'>
              <Paragraph
                className={'mb-[15px]'}
                text={'TARC stands out as a leading luxury real estate developer in New Delhi.'}
              />
              <a
                href=''
                className='text-primary capitalize flex place-items-center font-[Baskervville]'
              >
                <span className='me-[8px]'>know more</span>
                <img src='./assets/icons/arrow-right.png' width='20' alt='Arrow right' />
              </a>
            </div>
          </div>
          <div className='col-span-1'></div>
          <div className='col-span-8 lg:mt-[0] mt-[30px]' ref={leadersContainerRef}>
            <div className='leaders-container'>
              <div className='grid-cols-1 lg:grid-cols-12 grid gap-[35px]'>
                <div className='col-span-4'>
                  <figure className='leader-figure'>
                    <img
                      src='./assets/images/home/leaders/leading_1.jpg'
                      alt='Anil Sarin, Chairman'
                      className='w-[100%]'
                    />
                    <figcaption className='mt-[10px] pt-[10px]'>
                      <h3 className='font-baskerville uppercase text-[20px] text-primary mb-[8px]'>ANIL SARIN</h3>
                      <span className='text-[#AA8A80] text-[14px]'>Chairman</span>
                    </figcaption>
                  </figure>
                </div>
                <div className='col-span-4'>
                  <figure className='leader-figure'>
                    <img
                      src='./assets/images/home/leaders/leading_2.jpg'
                      alt='Amar Sarin, Managing Director and CEO'
                      className='w-[100%]'
                    />
                    <figcaption className='mt-[10px] pt-[10px]'>
                      <h3 className='font-baskerville uppercase text-[20px] text-primary mb-[8px]'>AMAR SARIN</h3>
                      <span className='text-[#AA8A80] text-[14px]'>Managing Director and CEO</span>
                    </figcaption>
                  </figure>
                </div>
                <div className='col-span-4'>
                  <figure className='leader-figure'>
                    <img
                      src='./assets/images/home/leaders/leading_3.jpg'
                      alt='Muskan Sarin, Director'
                      className='w-[100%]'
                    />
                    <figcaption className='mt-[10px] pt-[10px]'>
                      <h3 className='font-baskerville uppercase text-[20px] text-primary mb-[8px]'>MUSKAN SARIN</h3>
                      <span className='text-[#AA8A80] text-[14px]'>Director</span>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}