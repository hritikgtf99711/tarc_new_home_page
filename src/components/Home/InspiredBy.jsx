import React from 'react'

export default function InspiredBy() {
  return (
    <section className='py-[60px] border-y-[#AA8A80] border-[1px]'>
      <div className='container'>
        <div className='lg:flex place-items-center justify-center'>
            <h2 className='font-[Baskervville] text-primary capitalize text-[30px]'>inspired by india</h2>
            <div className='line lg:w-[0.2px] w-[100px] h-[0.2px] lg:py-0 my-[20px] mx-[30px] lg:h-[50px] bg-[var(--primary-color)]'>
            </div>
            <img src='./assets/icons/indian_image.png' alt="indian image" width={'160'}/> 
        </div>
      </div>
    </section>
  )
}