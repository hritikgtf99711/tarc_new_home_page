import React from 'react'
import Heading from './Heading';
import Paragraph from './Paragraph';
export default function Projectsec() {
  return (
    <section className='relative pt-[30px] overflow-hidden'>
      <img src='./assets/images/image_bg_texture.png' className='w-[80%]  absolute top-[-72px] left-[50%]  translate-x-[-50%]  z-[-1] m-[auto]' alt=''/>  
    <div className='grid grid-cols-6 lg:grid-cols-12'>
        <div className='col-span-6'>
            <div className='content_container h-[100%] relative'>
            <img src='./assets/images/home/project_images/project_right_img.jpg' className='h-[100%] object-cover' alt=''/>
            <div className='content absolute bottom-[80px] z-[1] px-[15px] lg:px-[60px]'>
                <Heading Heading={'luxury residences'} className="!text-white mb-[15px] text-[36px]"/>
                <Paragraph className="!text-white text-[16px] capitalize" text={'Luxury is equated with sheer opulence, magnificence, or aesthetic allure. Yet, TARC transcends this surface definition.'}/>
            </div>
            </div>
        </div>
        <div className='col-span-6  z-[99999] relative p-[50px] bg-[var(--secondary-color)] snap-y  overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] h-[100%] w-[100%] flex justify-center place-items-center m-[auto]'>
            <div className='overflow_sec snap-y max-h-[86vh]'>
                <figure className='project_item snap-center text-right mb-[180px]'>
                    <img src='./assets/images/home/project_images/kailasa/kailasa_logo.png' alt='' width={'160'} className='ml-[auto] mb-[30px]'/>
                    <img src='./assets/images/home/project_images/kailasa/kailasa_banner.jpg' className='xl:h-[60vh] h-[400px]' alt=''/>
                    <figcaption className='mt-4  flex  place-items-center'><span className='uppercase text-white text-[18px] text-left'>TARC Kailasa, Patel Road</span> <span className='w-[100px] h-[1px] bg-[#fff] block ms-[15px]'></span></figcaption>
                </figure>
                  <figure className='project_item snap-center text-right mb-[180px]'>
                    <img src='./assets/images/home/project_images/kailasa/kailasa_logo.png' alt='' width={'160'} className='ml-[auto] mb-[30px]'/>
                    <img src='./assets/images/home/project_images/kailasa/kailasa_banner.jpg' className='xl:h-[60vh] h-[400px]' alt=''/>
                    <figcaption className='mt-4  flex  place-items-center'><span className='uppercase text-white text-[18px] text-left'>TARC Kailasa, Patel Road</span> <span className='w-[100px] h-[1px] bg-[#fff] block ms-[15px]'></span></figcaption>
                </figure>
                  <figure className='project_item snap-center text-right mb-[180px]'>
                    <img src='./assets/images/home/project_images/kailasa/kailasa_logo.png' alt='' width={'160'} className='ml-[auto] mb-[30px]'/>
                    <img src='./assets/images/home/project_images/kailasa/kailasa_banner.jpg' className='xl:h-[60vh] h-[400px]' alt=''/>
                    <figcaption className='mt-4  flex  place-items-center'><span className='uppercase text-white text-[18px] text-left'>TARC Kailasa, Patel Road</span> <span className='w-[100px] h-[1px] bg-[#fff] block ms-[15px]'></span></figcaption>
                </figure>
                  <figure className='project_item snap-center text-right mb-[180px]'>
                    <img src='./assets/images/home/project_images/kailasa/kailasa_logo.png' alt='' width={'160'} className='ml-[auto] mb-[30px]'/>
                    <img src='./assets/images/home/project_images/kailasa/kailasa_banner.jpg' className='xl:h-[60vh] h-[400px]' alt=''/>
                    <figcaption className='mt-4  flex  place-items-center'><span className='uppercase text-white text-[18px] text-left'>TARC Kailasa, Patel Road</span> <span className='w-[100px] h-[1px] bg-[#fff] block ms-[15px]'></span></figcaption>
                </figure>
                  <figure className='project_item snap-center text-right pb-[180px]'>
                    <img src='./assets/images/home/project_images/kailasa/kailasa_logo.png' alt='' width={'160'} className='ml-[auto] mb-[30px]'/>
                    <img src='./assets/images/home/project_images/kailasa/kailasa_banner.jpg' className='xl:h-[60vh] h-[400px]' alt=''/>
                    <figcaption className='mt-4  flex  place-items-center'><span className='uppercase text-white text-[18px] text-left'>TARC Kailasa, Patel Road</span> <span className='w-[100px] h-[1px] bg-[#fff] block ms-[15px]'></span></figcaption>
                </figure>
            </div>
        </div>
    </div>
    </section>
  )
}
