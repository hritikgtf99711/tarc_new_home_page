import React from 'react'

export default function Header() {
  return (
    <header className='py-[20px]'>
        <div className='container'>
        <div className='social_container flex justify-between'>
            <ul className='flex place-items-center'>
                <li><img  className="me-3" src='./assets/icons/facebook.svg' height={'14'} width={'14'} alt=''/></li>
                <li><img  className="me-3" src='./assets/icons/insta.png' height={'14'} width={'14'} alt=''/></li>
                <li><img  className="me-3" src='./assets/icons/linkedin.png' height={'14'} width={'14'} alt=''/></li>
                <li><img  className="me-3" src='./assets/icons/youtube.svg' height={'14'} width={'14'} alt=''/></li>
                <li><img  src='./assets/icons/twitter.png' height={'14'} width={'14'} alt=''/></li>
            </ul>

            <div className='ham_menu_container flex place-items-center'>
                <a href="#" className='flex place-items-center me-[40px]  text-[var(--primary-color)] uppercase font-[500] lg:flex hidden'><span className='me-4 text-[14px]'>Get in touch </span><img src='./assets/icons/arrow-right.png'   height={'25'} width={'25'}  alt=''/></a>
                <img src='./assets/icons/ham_menu.png' alt=''  height={'35'} width={'35'} />
            </div>
        </div>
        </div>
    </header>
  )
}
