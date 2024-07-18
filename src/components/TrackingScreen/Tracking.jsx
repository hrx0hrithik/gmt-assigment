import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import Clock from '../Clock/Clock'
import Slider from '../Slider/Slider'
import Quotes from '../Quotes/Quotes'
import { image1 } from '../../assets'

const TrackingScreen = () => {
  const [searchParams] = useSearchParams()
  const clockSpeed = searchParams.get('clockSpeed') || 1
  const [speed, setSpeed] = useState(clockSpeed)
  const [buttonInactive, setButtonInactive] = useState(false)

  useEffect(() => {
    setSpeed(clockSpeed)
  }, [clockSpeed])

  const handleShare = () => {
    try {
      setButtonInactive(true)
      const currentURL = window.location.href
      const uniqueURL = `${currentURL}?clockSpeed=${speed}`
      navigator.clipboard.writeText(uniqueURL).then(() => {
        alert('URL copied to clipboard')
      })
    } catch (error) {
      console.log(error)
    } finally {
      setButtonInactive(false)
    }
  }

  return (
    <div className="flex flex-col items-center w-screen h-screen relative">
      <img src={image1} alt="Delicacies" className="h-full w-full absolute -z-20 scale-x-[-1] object-cover" />
      <div className='flex flex-col justify-between items-center p-3'>
        <Quotes />
        <div className=' w-[90%] p-4 absolute bottom-3 rounded-xl bg-white'>
          <div className=' flex flex-col items-center mt-2'>
            <Clock speed={speed} />
          </div>
          <Slider speed={speed} setSpeed={setSpeed} />
          <button disabled={buttonInactive} className={`my-5 px-5 py-3 w-full text-base text-white border bg-[#FE8C00] rounded-full ${buttonInactive ? "opacity-50" : "opacity-100"}`} onClick={handleShare}>Share</button>
        </div>
      </div>
    </div>
  )
}

export default TrackingScreen
