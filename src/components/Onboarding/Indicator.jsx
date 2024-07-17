import React from 'react'

const Indicator = ({pos}) => {
  return (
    <div className=' h-[6px] w-[80px] mx-auto flex justify-between'>
      <span className={`rounded-full w-6 ${pos === 1 ? "bg-white" : "bg-[#C2C2C2]"}`}></span>
      <span className={`rounded-full w-6 ${pos === 2 ? "bg-white" : "bg-[#C2C2C2]"}`}></span>
      <span className={`rounded-full w-6 ${pos === 3 ? "bg-white" : "bg-[#C2C2C2]"}`}></span>
    </div>
  )
}

export default Indicator