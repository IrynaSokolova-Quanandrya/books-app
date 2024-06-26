import { Container } from "components/GlobalStyle"
import { TrainingFilter } from "./adds/TrainingFilter"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchBooks } from "../../redux/library/operation";
import { StartingTraining, fetchBooksSelected, checkWindowSize } from "../../redux/training/operation";
// import { Chart } from "chart.js";
import { BtnTrain, BigContainer, DivTrainingDivs, DivWhatToRead,MegaContainer, GoalContainer, MediumContainer, MyTrainingDiv, MyTrainingText, MainCountainer, ModallAddBtn } from "./styles/Trainingstyle.styled";
import { GoalTraining } from "./adds/myGoalTraining";
import { Chart } from "../Statistics/components/chart";
import { selectSize, selectSelectedBooks} from "../../redux/training/selectors";
import { MobileBooksList } from "./adds/mobileBooksList";
import { ModalAddBook } from "./adds/modalAddBook";
import BeatLoader from "react-spinners/BeatLoader";
import { SpinerContainer } from "components/AddBook/Styled/StyledList.styled";

export const Training = ()=>{
    const dispatch = useDispatch();
    const size = useSelector(selectSize)
    const[ modalTreaker, setModalTreaker] = useState(false)
    const selectedBooks = useSelector(selectSelectedBooks);
    const delince = () => {
        setModalTreaker(false)
    }
  
    useEffect(() => {
      const resizeing = () => {
        if(window.innerWidth !== size)
        dispatch(checkWindowSize(window.innerWidth))
    }
      dispatch(fetchBooks());
    dispatch(fetchBooksSelected())
    dispatch(checkWindowSize(window.innerWidth))
    setInterval(resizeing, 1000)

    }, [dispatch, size]);
    
    
    const handleStartingTraining = () => {
        dispatch(StartingTraining())
      };

    const isLoadings = useSelector(state => state.books.isLoading);
    
    return (
 <MegaContainer>
  {modalTreaker && <ModalAddBook delince={delince}/>}
  {!modalTreaker && <>
       {size <= 770 && <GoalContainer>
                <GoalTraining/>
                </GoalContainer>}
        <MainCountainer>
          { size > 320 && <> <MyTrainingDiv>
            <MyTrainingText>Моє Тренування</MyTrainingText>
          </MyTrainingDiv>
        {isLoadings ? (
            
            <SpinerContainer>
            <BeatLoader
            color="#FF6B08"
            cssOverride={{
              display: "block",
              margin: "0 auto",
              borderColor: "red",
              color: "#FF6B08"
            }}
            size="25px"
          />
          </SpinerContainer>
          ) : (
            <>
               <TrainingFilter />
            </>      
          )}</>}

          {size <= 320 && <>
            {isLoadings ? (
            
            <p>Loading...</p>
          ) : (
            <>
               <MobileBooksList />
            </>      
          )}</>}
               
               {selectedBooks.length > 0 && <BtnTrain onClick={handleStartingTraining}>Почати тренування</BtnTrain>}
        </MainCountainer>
          
               {size > 770 &&<GoalContainer>
                <GoalTraining/>
                </GoalContainer>}
        <BigContainer>
          <Chart/>
        </BigContainer>

        {size <= 320 && <ModallAddBtn onClick={()=>setModalTreaker(true)}>+</ModallAddBtn>} </>}
        
        </MegaContainer>
       
    )
}