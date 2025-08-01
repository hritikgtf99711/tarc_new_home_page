import React from 'react'

export default function Paragraph({text,className}) {
  return (
    <p className={`leading-[30px] font-[300] ${className} text-[14px] text-[#2B2B2B]`}>{text}</p>
  )
}
