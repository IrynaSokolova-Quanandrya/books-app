import {Select} from '../style/hidenList.styled'
import {useState} from "react"
import {useSelector} from 'react-redux'
import { selectFinishDate, selectStartDate } from '../../../redux/training/selectors';

export const SelectDate = () => {
    const [dateValue, setDateValue] = useState('')
    const timeOfTheFinish = useSelector(selectFinishDate)
    const timeOfTheStart = useSelector(selectStartDate)

    const handleStartDateChange = (e) => {
      const chosenDate = Date.parse(e.target.value)/1000
      if (chosenDate >= timeOfTheStart && chosenDate <= timeOfTheFinish){
        setDateValue(e.target.value)
      }
    };
    
    return <Select>
      <input
          value={dateValue}
          type="date"
          placeholder="Початок"
          onChange={handleStartDateChange}
        />
    
  </Select>
}