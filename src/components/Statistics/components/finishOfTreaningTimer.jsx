import React from 'react';
import { useTimer } from 'react-timer-hook';
import {useSelector} from 'react-redux'
import { selectFinishDate } from '../../../redux/training/selectors';
import { useState } from 'react';
import { Modal } from './modal';
import { TimerBox, TimerTitle, Numbers, SubTitles, TimerList, TimerItem, Container } from '../style/timer.styled';

export function TimeTofinish() {
  const timeOfTheFinish = useSelector(selectFinishDate)
  const time = new Date(timeOfTheFinish * 1000)
  const[ modalTreaker, setModalTreaker] = useState(false)

  const {
    seconds,
    minutes,
    hours,
    days,
  } = useTimer({ expiryTimestamp: time, onExpire: () =>{ 
     setModalTreaker(true) 
    }});


  return (
    <>
     {modalTreaker && <Modal/>}
    <Container >
      <TimerTitle>До досягнення мети залишилось</TimerTitle>
      <TimerBox>

        <TimerList>
          <TimerItem> <Numbers>{days < 10 ? 0 : ''}{days}</Numbers> <SubTitles>ДН</SubTitles></TimerItem>
          <TimerItem><Numbers>{hours < 10 ? 0 : ''}{hours}</Numbers><SubTitles>ГОД</SubTitles></TimerItem>
          <TimerItem> <Numbers>{minutes < 10 ? 0 : ''}{minutes}</Numbers><SubTitles>ХВ</SubTitles></TimerItem>
          <TimerItem> <Numbers>{seconds < 10 ? 0 : ''}{seconds}</Numbers><SubTitles>СЕК</SubTitles></TimerItem>
        </TimerList>     
      </TimerBox>
    </Container>
    </>
  );
}