import React, { useState, useEffect } from 'react';
import AnalogClock from './AnalogClock';

const Clock = ({ speed }) => {
  const [initialTime, setInitialTime] = useState(null);
  const [currentTime, setCurrentTime] = useState(null);
  const [targetTime, setTargetTime] = useState(null);

  useEffect(() => {
    const now = new Date();
    setInitialTime(now);
    setCurrentTime(now);
    setTargetTime(new Date(now.getTime() - 120 * 60 * 1000));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime((prevTime) => {
        const newTime = new Date(prevTime.getTime() - speed * 1000); // Update current time every second
        return newTime;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [speed]);

  const formatTime = (time) => {
    return time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  };

  const calculateCountdown = () => {
    const totalSeconds = Math.floor((initialTime.getTime() - currentTime.getTime()) / 1000);
    const countdownSeconds = 120 * 60 - totalSeconds; // Calculate countdown from 120 minutes
    const hours = Math.floor(countdownSeconds / 3600);
    const minutes = Math.floor((countdownSeconds % 3600) / 60);
    const seconds = countdownSeconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  if (!initialTime || !currentTime || !targetTime) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* <p>Initial Time: {formatTime(initialTime)}</p>
      <p>Target Time: {formatTime(targetTime)}</p>
      <p>Current Time: {formatTime(currentTime)}</p> */}
      <div className='bg-[#fe8c00] w-[230px] h-[230px] rounded-full flex justify-center items-center'>
        <AnalogClock time={currentTime} />
      </div>
      <p className=' text-center mt-3 text-[#878787] font-normal'>Time left: <span className=' font-medium text-[#646464]'>{calculateCountdown(currentTime)} </span></p>
    </div>
  );
};

export default Clock;



// import React, { useState, useEffect } from 'react'
// import AnalogClock from './AnalogClock'

// const Clock = ({ speed }) => {
//   const [currentTime, setCurrentTime] = useState(new Date())
//   const targetTime = new Date(currentTime.getTime() - 120 * 60 * 1000) // 120 minutes into the past

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTime(prevTime => {
//         const newTime = new Date(prevTime.getTime() - (speed * 1000)) // Update current time every second
//         console.log('Time:', currentTime);
//         // console.log('Target Time:', targetTime.toLocaleTimeString());
//         return newTime
//       })
//     }, 1000)

//     return () => clearInterval(interval)
//   }, [speed, currentTime])

//   const formatTime = (time) => {
//     return time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
//   }

//   return (
//     <div>
//       {/* <h1>Time Running Backwards</h1> */}
//       <p>{formatTime(currentTime)}</p>
//       <p>{formatTime(targetTime)}</p>
//       <div className=' bg-[#fe8c00] w-[220px] h-[220px] rounded-full flex justify-center items-center'>
//       <AnalogClock time={currentTime} />
//       </div>
//     </div>
//   )
// }

// export default Clock
