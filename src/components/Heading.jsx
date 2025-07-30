import React from 'react'

export default function Heading({Heading,className}) {
  return (
      <h2 className={`font-baskerville text-primary leading-[35px] lg:leading-[50px] ${className}  uppercase text-[24px]`}>{Heading}</h2>
  )
}
