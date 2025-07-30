import React from 'react'
import Heading from './Heading'
export default function Footer() {
  return (
    <footer className='py_section  !pb-[0] relative mt-[60px]'>
        <img src='./assets/images/footer_bg.jpg' className='absolute top-0 left-0 w-[100%] object-cover h-[100%]' alt='footer bg'/>
        <div className='container pb-[80px] relative'>
            <div className='grid grid-cols-2 lg:grid-cols-12'>
                <div className='col-span-3'>
                    <Heading Heading={'contact'} className={'!text-white lg:text-[32px]'}/>
                    <ul className='mt-[50px]'>
                        <li className='mb-[16px] lg:mb-[30px]'>
                            <a href="" className='text-white flex place-items-start leading-[30px] gap-[20px]'><img width={'20'} src="./assets/icons/icon_phone.svg" alt=""/>(+91)  9999 8888 44</a>
                        </li>
                        <li className='mb-[16px] lg:mb-[30px]'>
                            <a href="" className='text-white flex place-items-start leading-[30px] gap-[20px]'><img width={'20'} src="./assets/icons/icon_email.svg" alt=""/>info@tarc.com</a>
                        </li>
                        <li><a href="" className='text-white flex place-items-start leading-[30px] gap-[20px]'><img width={'20'} src="./assets/icons/icon_location.svg" alt=""/><span> 2nd Floor, C-3, Qutab <span className='lg:block'></span>
                        Institutional Area Road, Block C,<span className='lg:block'></span>
                        Katwaria Sarai, Delhi 110016</span></a></li>
                    </ul>

                </div>
                <div className='col-span-6 m-[auto] text-center my-[70px] lg:my-[100px]'>
                    <img src='./assets/images/footer_logo.jpg' alt='' width={'230'} className='rounded-[50%] lg:w-[230px] w-[130px] m-[auto]'/>
                    <ul className='flex justify-center gap-[30px] mt-[30px]'>
                        <li>
                            <a href=""><img width={'20'} src="./assets/icons/icon_facebook.png" alt=""/></a>  
                        </li>
                           <li>
                            <a href=""><img width={'20'} src="./assets/icons/icon_linkedin.png" alt=""/></a>  
                        </li>
                           <li>
                            <a href=""><img width={'20'} src="./assets/icons/icon_twitter.png" alt=""/></a>  
                        </li>
                           <li>
                            <a href=""><img width={'20'} src="./assets/icons/icon_youtube.png" alt=""/></a>  
                        </li>
                           <li>
                            <a href=""><img width={'20'} src="./assets/icons/icon_insta.png" alt=""/></a>  
                        </li>
                    </ul>

                </div>
                <div className='col-span-3 '>
                    <Heading Heading={'quick links'} className={'!text-white  lg:text-end text-[32px]'}/>
                    <ul className='mt-[50px] uppercase lg:text-end'>
                            <li className='mb-[16px] lg:mb-[30px] '>
                            <a href="" className='text-white  gap-[20px]'>Board of Directors</a>
                            </li>
                            <li className='mb-[16px] lg:mb-[30px] '>
                            <a href="" className='text-white  gap-[20px]'>Corporate Governance</a>
                            </li>
                            <li className='mb-[16px] lg:mb-[30px] '><a href="" className='text-white  gap-[20px]'> Press Releases</a></li>
                            <li className='mb-[16px] lg:mb-[30px] '><a href="" className='text-white  gap-[20px]'>blogs</a></li>
                            <li className=''><a href="" className='text-white  gap-[20px]'>Join our team</a></li>
                    </ul>
                </div>
            </div>
          
        </div>
          <div className='bg-[#9F7F75] py-[10px]  relative'>
            <div className='container'>
                <ul className='lg:flex text-white text-[14px] justify-between'>
                <li className='lg:mb-0 mb-[10px]'><a href="">Privacy Policy | disclaimer</a></li>
                    <li>Copyright <a href="">@ TARC</a> Limited | 2025 | Curated by:<a href="https://www.gtftechnologies.com/" target='_blank'> GTF Technologies</a></li>
                </ul>
                </div>
            </div>

    </footer>
  )
}
