import { useEffect, useState } from 'react';
import styled from 'styled-components';

const TimerStyled = styled.div`
  font-weight: bold;
`;

function Timer() {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const timer = window.setInterval(() => {
      setDate(new Date())
    }, 1000)

    return function cleanup() {
      window.clearInterval(timer)
    }
  }, [])
  
  return (
    <TimerStyled>
      🕙 {date.toLocaleTimeString()}
    </TimerStyled>
  )
}

export default Timer;