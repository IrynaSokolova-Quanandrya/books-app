import { TimeTofinish } from "./components/finishOfTreaningTimer";
import { NewYearTimer } from "./components/timerToNewYear";
import {Chart} from "./components/chart"
import React from "react"
import { AddPages } from "./components/addPages"
import { ViewStatistic } from "./components/viewStatistic"
import { MyGoal } from "./components/myGoal";
import { BooksList } from "./components/booksList";
import { useDispatch, useSelector } from "react-redux";
import { BigContainer, SmallContainer, TimersContainer, MegaContainer, MediumContainer, GoalContainer } from "./style/statistic.styled";
import { useEffect, useState } from "react";
import { getTreaningData, checkWindowSize} from "../../redux/training/operation";
import { selectIsLoading, selectSize, selectTrainingId } from "../../redux/training/selectors";
import { ExitBtn } from "./style/myGoal.styled";
import { MobileBooksList } from "./components/mobileBooksList";
import { AreYouSureModal } from "./components/areYouSureModal";
import BeatLoader from "react-spinners/BeatLoader";
import { SpinerContainer } from "components/AddBook/Styled/StyledList.styled";



export const Statistics = ()=>{
    
    const isLoading = useSelector(selectIsLoading)
    const size = useSelector(selectSize)
    const dispatch = useDispatch()
    const[ modalTreaker, setModalTreaker] = useState(false)
    const delince = () => {
        setModalTreaker(false)
    }

    

    useEffect(()=> {
        const resizeing = () => {
            if(window.innerWidth !== size)
            dispatch(checkWindowSize(window.innerWidth))
        }
        dispatch(getTreaningData())
        dispatch(checkWindowSize(window.innerWidth))
        setInterval(resizeing, 1000)
    }, [dispatch, size])

    return(
        <MegaContainer>
             {isLoading &&  <SpinerContainer>
            <BeatLoader
            color="#FF6B08"
            cssOverride={{
              display: "block",
              margin: "0 auto",
              borderColor: "red",
              color: "#FF6B08"
            }}
            size="50px"
          />
          </SpinerContainer>}
            {!isLoading && <>
                <BigContainer>
                     <MediumContainer>
                        <TimersContainer>
                            <NewYearTimer/>
                            <TimeTofinish/>
                         </TimersContainer> 
                         {size <= 770 &&<><GoalContainer>
                    <MyGoal/>
                    </GoalContainer>
                     <ExitBtn  onClick={()=>setModalTreaker(true)}>Завчасно закінчити тренування</ExitBtn>
                     </> }
                     {size > 320 && <BooksList/>}
                     {size <= 320 && <MobileBooksList/>}
                         
                     </MediumContainer>
                    
                    {size > 770 && <GoalContainer>
                    <MyGoal/>
                    </GoalContainer>}
                    {modalTreaker && <AreYouSureModal delince={delince}/>}
                   
                </BigContainer>
      
                <BigContainer>
                     <Chart/>
                    <SmallContainer>
                         <AddPages/>
                         <ViewStatistic/>
                    </SmallContainer>
                </BigContainer>
        </>}
        </MegaContainer>
    )
}