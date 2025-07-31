import React from 'react'

export default function  Commonbtn({className=''}) {
  return (
    <a href="" className={`bg-[var(--primary-color)] ${className} inline-flex place-items-center g-[16px]  py-[10px] px-[50px] rounded-[28px] capitalize text-[#fff]`}><span className='inline-block me-[8px]'>know more </span><img src="./assets/icons/arrow-right-clr.png" alt="Arrow Right" width={'25'}/></a>
  )
}
