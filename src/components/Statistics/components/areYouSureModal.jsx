import { selectTrainingId } from "../../../redux/training/selectors"
import { ModalWindow, ModalBox, YesBtn, NoBtn, BtnDiv} from "../style/areYouSureModal.styled"
import { useDispatch, useSelector } from "react-redux"
import { andOfTraining } from "../../../redux/training/operation"

export const AreYouSureModal = ({delince}) => {
    const dispatch = useDispatch()
    const trId = useSelector(selectTrainingId);

    const handlerOnClick = () => {
        dispatch(andOfTraining(trId))
    }

    // const style = {}
    return <ModalWindow>
        <ModalBox>

    <p>Ви певні, що бажаєте завершити тренування завчасно?</p>
    <BtnDiv>
        <NoBtn onClick={delince}>Ні</NoBtn>
        <YesBtn to='/training' onClick={handlerOnClick}>Так</YesBtn>
    </BtnDiv>
    </ModalBox>
    </ModalWindow>
}