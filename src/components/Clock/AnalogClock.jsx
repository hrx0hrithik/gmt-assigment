import React from 'react';

const AnalogClock = ({ time }) => {
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hourStyle = {
    transform: `rotate(${(hours * 30) + 90}deg)`,
  };
  const minuteStyle = {
    transform: `rotate(${(minutes * 6) + 90}deg)`,
  };
  const secondStyle = {
    transform: `rotate(${(seconds * 6) + 90}deg)`,
  };

  return (
    <div className="relative h-[200px] w-[200px] m-3 rounded-full border-4 border-white">
      <div className="hour-hand absolute w-1/2 top-1/2 origin-[100%] bg-white h-[3px]" style={hourStyle}></div>
      <div className="minute-hand absolute w-1/2 top-1/2 origin-[100%] bg-gray-400 opacity-70 h-[2px]" style={minuteStyle}></div>
      <div className="second-hand absolute w-1/2 top-1/2 origin-[100%] bg-black h-[1px] " style={secondStyle}></div>
    </div>
  );
};

export default AnalogClock;
