import React, { useEffect } from 'react';
import Heading from '../Heading';
import Paragraph from '../Paragraph';
import Commonbtn from '../Commonbtn';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
export default function About() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate the video/image container
    gsap.from('.about-sec .col-span-6:first-child', {
      opacity: 0,
      x: -100,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.about-sec',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    // Animate the heading with staggered letter animation
    const heading = document.querySelector('.about-sec .content h2');
    if (heading) {
      const letters = heading.textContent.split('');
      heading.innerHTML = letters.map(letter => `<span class="letter">${letter}</span>`).join('');
      gsap.from('.about-sec .letter', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.03,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.about-sec .content',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    }

    // Animate the paragraph
    gsap.from('.about-sec .content p', {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: 'power3.out',
      delay: 0.3,
      scrollTrigger: {
        trigger: '.about-sec .content',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    // Animate the button
    gsap.from('.about-sec .content button', {
      opacity: 0,
      scale: 0.8,
      duration: 0.8,
      ease: 'back.out(1.7)',
      delay: 0.6,
      scrollTrigger: {
        trigger: '.about-sec .content',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    // Cleanup animations on component unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      gsap.killTweensOf('.about-sec .col-span-6:first-child, .about-sec .letter, .about-sec .content p, .about-sec .content button');
    };
  }, []);

  return (
    <section className='py_section about-sec'>
      <div className='container'>
        <div className='xl:w-[80%] m-[auto] items-center'>
          <div className='grid justify-center place-items-center lg:grid-cols-12'>
            <div className='col-span-6 relative lg:mb-0 mb-[30px]'>
              <div className='relative inline-block'>
                <img src='./assets/icons/bg_blob.png' className='w-[250px] right-[-52px] top-[-21px] z-[-1] absolute' alt='' />
                <div className='relative overflow-hidden z-[1] rounded-[50%] rounded-br-[0] h-[300px] w-[300px] lg:h-[350px] lg:w-[350px] inline-block'>
                  <video autoPlay muted loop className='object-cover h-[545px] w-[800px] object-[-201px]'>
                    <source src='./assets/video/Insp-India.mp4' type='video/mp4' />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
            <div className='col-span-6'>
              <div className='content'>
                <Heading Heading={<span>Where legacy finds <span className='lg:block'></span> a new home</span>} />
                <div className='mt-[30px] mb-[45px]'>
                  <Paragraph text={"India's essence is a confluence of art and innovation. At TARC Limited, we draw inspiration from the grandeur of India. Embedded within the ethos, you'll find a celebration of India's unparalleled legacy: the perfect blend of age-old wisdom, deep-rooted sustainability and modern aesthetics. In India's past, we find our future. "} />
                </div>
                <Commonbtn />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}