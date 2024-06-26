import { selectFinishDate, selectStartDate, selectTrainingId } from '../../../redux/training/selectors';
import {useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
import { addNewChekout } from "../../../redux/training/operation";
import { Input, Label, StatBox, Title, StatForm, StatBtn } from '../style/addPages.styled';

export const AddPages = () => {
  const trId = useSelector(selectTrainingId);
  const dispatch = useDispatch()
    const [dateValue, setDateValue] = useState('')
    const [pages, setPages] = useState('')
    const timeOfTheFinish = useSelector(selectFinishDate)
    const timeOfTheStart = useSelector(selectStartDate)
    const handleStartDateChange = (e) => {
      const chosenDate = Date.parse(e.target.value)/1000
      if (chosenDate >= timeOfTheStart && chosenDate <= timeOfTheFinish){
        setDateValue(e.target.value)
      }
    };

    const handleInputChange = (e) => {
        setPages(e.target.value)
    }
    
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const unixDate = Date.parse(dateValue)/1000
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        const checkoutData = {date: dateValue, time: `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`, pages, unix: unixDate}
        dispatch(addNewChekout({checkoutData, trId}))
         console.log(`${hours}:${minutes}:${seconds}`)
         
    }
    return <StatBox>
      <Title>Результати</Title>
    <StatForm onSubmit={handleFormSubmit}>
    <Label>
      Дата
      <Input
          value={dateValue}
          type="date"
          placeholder="Початок"
          onChange={handleStartDateChange}
        />
        </Label>
         <Label>
          Кількість сторінок
        <Input 
        value={pages}
        type="number"
        // placeholder="Початок"
        onChange={handleInputChange}
        />
        </Label>
        <StatBtn type="submit">Submit</StatBtn>
        
    
  </StatForm>
  </StatBox>
}