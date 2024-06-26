import moment from "moment";
import { selectSelectedBooks, selectIsStarted, selectFinishDate, selectStartDate  } from "../../../redux/training/selectors";
import {useSelector, useDispatch } from "react-redux";
import { ContainerMyGoal, ExitBtn } from "../style/myGoal.styled";
import { GoalList,GoalItem, GoalP, GoalText, GoalTextDiv, GoalTextP, GoalTextPDiv, SpshGoalP, MyGoalContainer } from "../style/myGoal.styled";
import { andOfTraining } from "../../../redux/training/operation"
import { selectTrainingId, selectSize } from "../../../redux/training/selectors"
import { useState } from 'react';
import { AreYouSureModal } from "./areYouSureModal";

   export const MyGoal = () => {
    const isStarted = useSelector(selectIsStarted)
    const selectedBooks = useSelector(selectSelectedBooks);
    const timeOfTheFinish = useSelector(selectFinishDate)
    const timeOfTheStart = useSelector(selectStartDate)
    const size = useSelector(selectSize)
    const[ modalTreaker, setModalTreaker] = useState(false)


    let daysLeft = 0

    const booksLeft = selectedBooks.filter((book)=> {
        return book.status === "reading"
    })

    const delince = () => {
        setModalTreaker(false)
    }

    if (timeOfTheFinish && timeOfTheStart && isStarted){
        const now = new Date();
        const start = Date.parse(now)/1000
        daysLeft =  moment.unix(timeOfTheFinish).diff(moment.unix(start), 'days')
        // console.log(daysLeft)
    } else if (timeOfTheFinish && timeOfTheStart){
        daysLeft =  moment.unix(timeOfTheFinish).diff(moment.unix(timeOfTheStart), 'days')
    }

    return <MyGoalContainer>
           <GoalTextDiv>
              <GoalText>Моя мета прочитати</GoalText> 
           </GoalTextDiv>
         
        <GoalList>
               <GoalItem>
                  <GoalTextPDiv>
                       <GoalP>{selectedBooks.length}</GoalP>
                       </GoalTextPDiv>
                <GoalTextP>Кількість книжок</GoalTextP>
            </GoalItem>
               <GoalItem>
                   <GoalTextPDiv>
                       <GoalP>{daysLeft}</GoalP>
                       </GoalTextPDiv>
                <GoalTextP>Кількість днів</GoalTextP>
            </GoalItem>
            <GoalItem>
            <GoalTextPDiv>
                <SpshGoalP>{booksLeft.length}</SpshGoalP>
                </GoalTextPDiv>
                <GoalTextP>Залишилось книжок</GoalTextP>
            </GoalItem>
               </GoalList>
 
            {size > 770 && <ExitBtn onClick={()=>setModalTreaker(true) }>Завчасно закінчити тренування</ExitBtn>}
            {modalTreaker && <AreYouSureModal delince={delince}/>}
              
    </MyGoalContainer>
}