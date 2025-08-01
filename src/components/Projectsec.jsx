import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Heading from './Heading';
import Paragraph from './Paragraph';

export default function Projectsec() {
  const sectionRef = useRef(null);
  const overflowSecRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const section = sectionRef.current;

      // Animate background texture
      gsap.from('.bg-texture', {
        opacity: 0,
        scale: 1.2,
        duration: 2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
      });

      // Animate left-side content container image
      gsap.from('.content_container img', {
        opacity: 0,
        scale: 1.15,
        duration: 1.8,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '.content_container',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });

      // Animate left-side heading with letter-by-letter effect
      const heading = section.querySelector('.content_container h2');
      if (heading) {
        const letters = heading.textContent.split('');
        heading.innerHTML = letters
          .map(letter => `<span class="letter">${letter === ' ' ? '&nbsp;' : letter}</span>`)
          .join('');
        gsap.from(heading.querySelectorAll('.letter'), {
          opacity: 0,
          y: 30,
          rotationX: 45,
          duration: 0.9,
          stagger: 0.05,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: '.content_container',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        });
      }

      // Animate left-side paragraph
      gsap.from('.content_container p', {
        opacity: 0,
        y: 50,
        scale: 0.9,
        duration: 1.3,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '.content_container',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        delay: 0.7,
      });

      // Animate right-side project items
      const projectItems = section.querySelectorAll('.project_item');
      projectItems.forEach((item, index) => {
        const logo = item.querySelector('img:first-child');
        const banner = item.querySelector('img:last-child');
        const caption = item.querySelector('figcaption');

        // Logo animation
        gsap.from(logo, {
          opacity: 0,
          scale: 0.6,
          rotation: 20,
          duration: 1.2,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
            scroller: overflowSecRef.current, // Use scrollable container as scroller
          },
          delay: index * 0.6,
        });

        // Banner animation
        gsap.from(banner, {
          opacity: 0,
          y: 80,
          scale: 0.9,
          duration: 1.5,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
            scroller: overflowSecRef.current,
          },
          delay: index * 0.6 + 0.4,
        });

        // Caption animation (including line)
        gsap.from(caption, {
          opacity: 0,
          y: 40,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
            scroller: overflowSecRef.current,
          },
          delay: index * 0.6 + 0.8,
        });

        // Hover effect for banner
       
      });

      // Animate bottom section (new "View More" button) after right-side scroll ends
      gsap.from('.view-more', {
        opacity: 0,
        y: 60,
        scale: 0.9,
        duration: 1.5,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: overflowSecRef.current,
          start: 'bottom bottom', // Triggers when the bottom of overflow_sec hits the viewport bottom
          toggleActions: 'play none none reverse',
          scroller: overflowSecRef.current,
        },
      });
    }, sectionRef);

    return () => {    
      ctx.revert();
    };
  }, []);

  return (
    <section className='relative pt-[30px] overflow-hidden project-sec' ref={sectionRef}>
      <img
        src='./assets/images/pattern.svg'
        className='w-[80%] absolute top-[-60px] left-[50%] translate-x-[-50%] z-[-1] m-[auto] bg-texture'
        alt='Background texture'
      />
      <div className='grid grid-cols-6 lg:grid-cols-12'>
        <div className='col-span-6  overflow-hidden relative'>
          <div className='content_container h-[100%] relative'>
            <img
              src='./assets/images/home/project_images/project_right_img.jpg'
              className='h-[100%] object-cover'
              alt='Project background'
            />
            <div className='content absolute bottom-[80px] z-[1] px-[15px] lg:px-[60px]'>
              <Heading Heading={'luxury residences'} className='!text-white mb-[15px] text-[36px]' />
              <Paragraph
                className='!text-white text-[16px] capitalize'
                text={'Luxury is equated with sheer opulence, magnificence, or aesthetic allure. Yet, TARC transcends this surface definition.'}
              />
            </div>
          </div>
        </div>
        <div
          className='col-span-6 z-[99999] relative p-[50px] bg-[var(--secondary-color)] snap-y overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] h-[100%] w-[100%] flex justify-center place-items-center m-[auto]'
          ref={overflowSecRef}
        >
          <div className='overflow_sec snap-y max-h-[86vh]'>
            <figure className='project_item snap-center text-right mb-[180px]'>
              <img
                src='./assets/images/home/project_images/kailasa/kailasa_logo.png'
                alt='TARC Kailasa logo'
                width='160'
                className='ml-[auto] mb-[30px]'
              />
              <img
                src='./assets/images/home/project_images/kailasa/kailasa_banner.jpg'
                className='xl:h-[60vh] h-[400px]'
                alt='TARC Kailasa banner'
              />
              <figcaption className='mt-4 flex place-items-center'>
                <span className='uppercase text-white text-[18px] text-left'>TARC Kailasa, Patel Road</span>
                <span className='w-[100px] h-[1px] bg-[#fff] block ms-[15px]'></span>
              </figcaption>
            </figure>
            <figure className='project_item snap-center text-right mb-[180px]'>
              <img
                src='./assets/images/home/project_images/kailasa/kailasa_logo.png'
                alt='TARC Kailasa logo'
                width='160'
                className='ml-[auto] mb-[30px]'
              />
              <img
                src='./assets/images/home/project_images/kailasa/kailasa_banner.jpg'
                className='xl:h-[60vh] h-[400px]'
                alt='TARC Kailasa banner'
              />
              <figcaption className='mt-4 flex place-items-center'>
                <span className='uppercase text-white text-[18px] text-left'>TARC Kailasa, Patel Road</span>
                <span className='w-[100px] h-[1px] bg-[#fff] block ms-[15px]'></span>
              </figcaption>
            </figure>
            <figure className='project_item snap-center text-right mb-[180px]'>
              <img
                src='./assets/images/home/project_images/kailasa/kailasa_logo.png'
                alt='TARC Kailasa logo'
                width='160'
                className='ml-[auto] mb-[30px]'
              />
              <img
                src='./assets/images/home/project_images/kailasa/kailasa_banner.jpg'
                className='xl:h-[60vh] h-[400px]'
                alt='TARC Kailasa banner'
              />
              <figcaption className='mt-4 flex place-items-center'>
                <span className='uppercase text-white text-[18px] text-left'>TARC Kailasa, Patel Road</span>
                <span className='w-[100px] h-[1px] bg-[#fff] block ms-[15px]'></span>
              </figcaption>
            </figure>
            <figure className='project_item snap-center text-right mb-[180px]'>
              <img
                src='./assets/images/home/project_images/kailasa/kailasa_logo.png'
                alt='TARC Kailasa logo'
                width='160'
                className='ml-[auto] mb-[30px]'
              />
              <img
                src='./assets/images/home/project_images/kailasa/kailasa_banner.jpg'
                className='xl:h-[60vh] h-[400px]'
                alt='TARC Kailasa banner'
              />
              <figcaption className='mt-4 flex place-items-center'>
                <span className='uppercase text-white text-[18px] text-left'>TARC Kailasa, Patel Road</span>
                <span className='w-[100px] h-[1px] bg-[#fff] block ms-[15px]'></span>
              </figcaption>
            </figure>
            <figure className='project_item snap-center text-right pb-[130px]'>
              <img
                src='./assets/images/home/project_images/kailasa/kailasa_logo.png'
                alt='TARC Kailasa logo'
                width='160'
                className='ml-[auto] mb-[30px]'
              />
              <img
                src='./assets/images/home/project_images/kailasa/kailasa_banner.jpg'
                className='xl:h-[60vh] h-[400px]'
                alt='TARC Kailasa banner'
              />
              <figcaption className='mt-4 flex place-items-center'>
                <span className='uppercase text-white text-[18px] text-left'>TARC Kailasa, Patel Road</span>
                <span className='w-[100px] h-[1px] bg-[#fff] block ms-[15px]'></span>
              </figcaption>
            </figure>
          
          </div>
        </div>
      </div>
    </section>
  );
}