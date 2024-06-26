import React from 'react';
import { useTimer } from 'react-timer-hook';
import { TimerBox, TimerTitle, Numbers, SubTitles, TimerList, TimerItem, Container } from '../style/timer.styled';


export function NewYearTimer() {
    const currentYear = new Date().getFullYear();
    const nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);
    
  const {
    seconds,
    minutes,
    hours,
    days,
  } = useTimer({ expiryTimestamp: nextYear, onExpire: () => console.warn('onExpire called') });


  return (
    <Container>
      <TimerTitle>До закінчення року залишилосьo</TimerTitle>
      <TimerBox>
      <TimerList>
          <TimerItem> <Numbers>{days < 10 ? 0 : ''}{days}</Numbers> <SubTitles>ДН</SubTitles></TimerItem>
          <TimerItem><Numbers>{hours < 10 ? 0 : ''}{hours}</Numbers><SubTitles>ГОД</SubTitles></TimerItem>
          <TimerItem> <Numbers>{minutes < 10 ? 0 : ''}{minutes}</Numbers><SubTitles>ХВ</SubTitles></TimerItem>
          <TimerItem> <Numbers>{seconds < 10 ? 0 : ''}{seconds}</Numbers><SubTitles>СЕК</SubTitles></TimerItem>
        </TimerList> 
      </TimerBox>
    </Container>
  );
}