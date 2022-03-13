import { useEffect, useState } from 'react';
import styled from 'styled-components';

const TimerStyled = styled.div`
    color: #5d6cb5;
`;

function Timer() {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const timer = window.setInterval(() => {
            setDate(new Date())
        }, 1000)

        return window.clearInterval(timer);
    }, [])
    
    return (
        <TimerStyled>
            {date.toLocaleTimeString()}
        </TimerStyled>
    )
}

export default Timer;