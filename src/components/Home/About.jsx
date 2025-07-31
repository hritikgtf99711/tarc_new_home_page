import React from 'react'
import Heading from '../Heading'
import Paragraph from '../Paragraph'
import Commonbtn from '../Commonbtn'
export default function About() {
  return (
    <section className='py_section'>
        <div className='container'>
            <div className='xl:w-[70%] m-[auto] items-center'>
            <div className='grid   justify-center  place-items-center lg:grid-cols-12'>
                <div className='col-span-6 relative lg:mb-0 mb-[30px]'>
                    <div className='relative inline-block'>
                    <img src='./assets/icons/bg_blob.png' className='w-[250px] right-[-52px] top-[-21px] z-[-1] absolute' alt=""/>
                    <div className='relative overflow-hidden  z-[1]  rounded-[50%] rounded-br-[0] h-[300px] w-[300px]  lg:h-[350px] lg:w-[350px]  inline-block'>
                     <video autoPlay  muted loop  className='object-cover h-[545px] w-[800px] object-[-201px]'>
                        <source src="./assets/video/Insp-India.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    </div>
                    </div>
                </div>
                 <div className='col-span-6'>
                    <div className='content'>
                        <Heading Heading={<span>Where legacy finds <span className='lg:block'></span> a new home</span>}/>
                        <div className='mt-[30px] mb-[45px]'>
                        <Paragraph text={"India's essence is a confluence of art and innovation. At TARC Limited, we draw inspiration from the grandeur of India. Embedded within the ethos, you'll find a celebration of India's unparalleled legacy: the perfect blend of age-old wisdom, deep-rooted sustainability and modern aesthetics. In India's past, we find our future. "}/>
                        </div>
                        <Commonbtn/>
                    </div>
                    </div>     
            </div>
            </div>
        </div>
    </section>
  )
}
