import React from 'react'
import BannerSlider from './BannerSlider'

export default function Banner() {
  return (
    <section className='banner_sec  mt-[17px] overflow-hidden'>
        <div className='container'>
            <div className='heading_container text-center'>
                <img src='./assets/images/logo.png' className='m-auto' alt='logo' width={'135px'}/>
                <h1 className='font-baskerville uppercase text-primary text-[26px] mt-[22px] mb-[16px] font-[400]'>Where legacy finds a new home</h1>
                <div className='icon_div inline-flex place-items-center'>
                    <div className='line_container h-[0.8px] w-[70px] bg-[var(--primary-color)]'></div>
                    <img src='./assets/icons/design_icon.png' className='m-auto mx-[20px]' alt='logo' width={'50px'}/>
                   <div className='line_container h-[0.8px] w-[70px] bg-[var(--primary-color)]'></div>
                </div>
            </div>
        </div>
        <div className='mt-[30px] relative relative_div_height '>
                <img src='./assets/images/image_bg_texture.png' className='w-[70vw]  absolute top-[38px] left-[50%]  translate-x-[-50%]  z-[1] m-[auto]' alt=''/>
                <BannerSlider/>
            </div>
    </section>
  )
}
