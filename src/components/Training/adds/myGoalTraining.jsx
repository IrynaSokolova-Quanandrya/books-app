import moment from "moment";
import { selectSelectedBooks, selectFinishDate, selectStartDate  } from "../../../redux/training/selectors";
import {useSelector } from "react-redux";
import { GoalList,GoalItem, GoalP, GoalText, GoalTextDiv, GoalTextP, GoalTextPDiv, MyGoalColor, MyGoalContainer } from "../styles/Trainingstyle.styled";

   export const GoalTraining = () => {
    const selectedBooks = useSelector(selectSelectedBooks);
    const timeOfTheFinish = useSelector(selectFinishDate)
    const timeOfTheStart = useSelector(selectStartDate)

    let daysLeft = 0

    if (timeOfTheFinish && timeOfTheStart){
        daysLeft =  moment.unix(timeOfTheFinish).diff(moment.unix(timeOfTheStart), 'days')
    }

       return <MyGoalContainer>
       <GoalTextDiv>
          <GoalText>Моя мета прочитати</GoalText> 
       </GoalTextDiv>
       <MyGoalColor>
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
           </GoalList>
           </MyGoalColor>
</MyGoalContainer>
}