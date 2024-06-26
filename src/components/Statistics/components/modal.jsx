import { useDispatch, useSelector } from "react-redux"
import{BiLike} from "react-icons/bi"
import { andOfTraining } from "../../../redux/training/operation"
import { selectTrainingId } from "../../../redux/training/selectors"
import { ModalWindow, ModalBox, Btn} from "../style/modal.styled"

export const Modal = () => {
    const dispatch = useDispatch()
    const trId = useSelector(selectTrainingId);

    const handlerOnClick = () => {
        dispatch(andOfTraining(trId))
    }

    // const style = {}
    return <ModalWindow>
        <ModalBox>
        <BiLike color="#A6ABB9" size="55px"/>
    <p>Ти молодчина, але потрібно швидше! Наступного разу тобі все вдасться)</p>
    <Btn to='/training' onClick={handlerOnClick}>Ok</Btn>
    </ModalBox>
    </ModalWindow>

}