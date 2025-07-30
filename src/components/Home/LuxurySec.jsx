import React from 'react'
import Heading from '../Heading';
import Paragraph from '../Paragraph';
import Commonbtn from '../Commonbtn';
export default function LuxurySec() {
  return (
    <section className='py_section'>
      <div className='container'>
        <div className='grid grid-cols-6 lg:grid-cols-12 xl:w-[85%] m-[auto]'>
          <div className='col-span-6 m-auto'>
            <Heading Heading={'TARC LUXURY'}/>
            <Heading Heading={'Creating Space for the Mind'}/>
            <div className='xl:w-[70%] content_cont  ml-[auto]'>
            <Paragraph className="lg:my-[50px]" text={'Luxury is equated with sheer opulence, magnificence, or aesthetic allure. Yet, TARC transcends this surface definition. Embracing luxury that deeply resonates with the soul, cherishes genuine human connection and fosters inner peace, TARC emerges as a brand profoundly attuned to the intangible facets of luxury.'}/>
            <Commonbtn className="lg:mt-[100px] mt-[30px]"/>
            </div>
          </div>
          <div className='lg:block hidden col-span-1'>
          </div>
          <div className='lg:col-span-5 col-span-12 lg:mt-0 mt-[30px]'>
            <figure className='img_container'>              
              <img src='./assets/images/home/image_banner_4.jpg' className='w-[100%]' alt=''/>
            </figure>

          </div>
        </div>
      </div>
    </section>
  )
}
