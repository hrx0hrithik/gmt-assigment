import React from 'react'

const Slider = ({ speed, setSpeed }) => {
  const handleSliderChange = (e) => {
    setSpeed(e.target.value)
    console.log(speed)
  }

  return (
    <div className="mt-3 flex items-center text-[#87878790]">
      <span className='whitespace-nowrap mr-2 text-sm'>0.1 x</span>
      <input
        className='w-full accent-[#FE8C00]'
        type="range"
        min="0.1"
        max="2"
        step="0.1"
        value={speed}
        onChange={handleSliderChange}
      />
      <span className='whitespace-nowrap ml-2 text-sm'>2.0 x</span>
    </div>
  )
}

export default Slider
