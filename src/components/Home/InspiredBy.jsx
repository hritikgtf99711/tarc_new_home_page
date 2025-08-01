import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
export default function InspiredBy() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const heading = document.querySelector('.inspired-sec h2');
    if (heading) {
      const letters = heading.textContent.split('');
      heading.innerHTML = letters.map(letter => `<span class="letter">${letter}</span>`).join('');
      gsap.from('.inspired-sec .letter', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.05,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.inspired-sec',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    }

    gsap.from('.inspired-sec .line', {
      scaleX: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.inspired-sec',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      delay: 0.5,
    });

    gsap.from('.inspired-sec img', {
      opacity: 0,
      rotation: 15,
      duration: 1,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: '.inspired-sec',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      delay: 0.8,
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      gsap.killTweensOf('.inspired-sec .letter, .inspired-sec .line, .inspired-sec img');
    };
  }, []);

  return (
    <section className='py-[60px] border-y-[#aa8a804d] bg-[var(--opacity-color)] border-t-[0.1px] border-b-[0.1px] inspired-sec'>
      <div className='container py-[30px]'>
        <div className='lg:flex place-items-center justify-center'>
          <h2 className='font-[Baskervville] text-primary !font-[300]  text-[30px]'>Inspired By India</h2>
          <div className='line lg:w-[0.1px] w-[100px] h-[0.2px] lg:py-0 my-[20px] mx-[30px] lg:h-[50px] bg-[#0b48794a]'></div>
          <img src='./assets/icons/indian_image.png' alt='indian image' width='160' />
        </div>
      </div>
    </section>
  );
}