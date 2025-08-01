import React, { useEffect } from 'react';
import BannerSlider from './BannerSlider';
import gsap from 'gsap';

export default function Banner() {
  useEffect(() => {
    gsap.from('.banner_sec .m-auto', {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: 'power3.out',
    });

    const heading = document.querySelector('.banner_sec h1');
    const letters = heading.textContent.split('');
    heading.innerHTML = letters.map(letter => `<span class="letter">${letter}</span>`).join('');
    gsap.from('.banner_sec .letter', {
      opacity: 0,
      y: 20,
      duration: 0.8,
      stagger: 0.03,
      ease: 'power2.out',
      delay: 0.5,
    });

    gsap.from('.banner_sec .icon_div', {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      ease: 'back.out(1.7)',
      delay: 1,
    });

    gsap.from('.banner_sec .relative_div_height img', {
      opacity: 0,
      scale: 1.2,
      duration: 1.5,
      ease: 'power3.out',
      delay: 1.5,
    });

    gsap.from('.banner_sec .banner-slider', {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: 'power3.out',
      delay: 2,
    });

    return () => {
      gsap.killTweensOf('.banner_sec .m-auto, .banner_sec .letter, .banner_sec .icon_div, .banner_sec .relative_div_height img, .banner_sec .banner-slider');
    };
  }, []);

  return (
    <section className='banner_sec mt-[17px] overflow-hidden'>
      <div className='container'>
        <div className='heading_container text-center'>
          <img src='./assets/images/logo.png' className='m-auto' alt='logo' width='135px' />
          <h1 className='font-baskerville uppercase text-primary text-[26px] mt-[22px] mb-[16px] font-[400]'>Where legacy finds a new home</h1>
          <div className='icon_div inline-flex place-items-center'>
            <div className='line_container h-[0.8px] w-[70px] bg-[var(--primary-color)]'></div>
            <img src='./assets/icons/design_icon.png' className='m-auto mx-[20px]' alt='logo' width='50px' />
            <div className='line_container h-[0.8px] w-[70px] bg-[var(--primary-color)]'></div>
          </div>
        </div>
      </div>
      <div className='mt-[30px] relative relative_div_height'>
        <img src='./assets/images/image_bg_texture.png' className='w-[70vw] absolute top-[38px] left-[50%] translate-x-[-50%] z-[1] m-[auto]' alt='' />
        <BannerSlider className='banner-slider' />
      </div>
    </section>
  );
}