import React, { useState, useEffect } from 'react';
import { FaHourglassEnd } from 'react-icons/fa';
import styled from 'styled-components';

const TimerWrapper = styled.div`
  font-size: 35px;
  color: #f06078;
  font-weight: bold;
`;

const Timer = ({isTimerOn, setIsTimerOn}) => {

  // initialize secondsLeft with the seconds prop
  const [secondsLeft, setSecondsLeft] = useState(10);

  useEffect(() => {
    if (!isTimerOn) {
      setSecondsLeft(10)
      return;
    };
    console.log(isTimerOn, !isTimerOn, 'OFF DAPAT')
    // exit early when we reach 0
    if (!secondsLeft) {
      setIsTimerOn(false)
      return
    };

    // save intervalId to clear the interval when the
    // component re-renders
    const intervalId = setInterval(() => {
      setSecondsLeft(secondsLeft - 1);
    }, 1000);

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
    // add secondsLeft as a dependency to re-rerun the effect
    // when we update it
  }, [isTimerOn, secondsLeft, setIsTimerOn]);
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <TimerWrapper><FaHourglassEnd /> {`0${Math.floor(secondsLeft / 60)} : ${Math.floor(secondsLeft % 60) < 10 ? '0' : ''}${Math.floor(secondsLeft % 60)}`}</ TimerWrapper>
    </div>
  )
}

export default Timer;