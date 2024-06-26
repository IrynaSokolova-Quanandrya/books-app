import { selectSelectedBooks, selectTrainingId} from "../../../redux/training/selectors";
import {useDispatch, useSelector } from "react-redux";
import { markAsCompleted } from "../../../redux/training/operation";
import { BooksItem, BooksList, SubItem, SubList, SubTitle, TitleBox } from "../style/mobileBooksList.styled";

export const MobileBooksList = ()=>{
    const selectedBooks = useSelector(selectSelectedBooks);
    const trId = useSelector(selectTrainingId);
    const dispatch = useDispatch()
    
    const handleChekboxChange = (bookId) => {
      dispatch(markAsCompleted({bookId, trId}))
    }
    return <>
    <BooksList>
    {selectedBooks.map((book) => (
           <BooksItem key={book.id}>
            <TitleBox>
                <input 
                type="checkbox" 
                name={book.title} 
                id={book.id} 
                checked={book.status === 'completed'} 
                onChange={()=>handleChekboxChange(book.id)}
                />
                <p>
                {book.title} 
                 </p>
                 </TitleBox>
                 <SubList>
                    <SubItem>
                        <SubTitle>Автор:</SubTitle>
                        <p>{book.author}</p>
                    </SubItem>
                    <SubItem>
                        <SubTitle>Рік:</SubTitle>
                        <p>{book.year}</p>
                    </SubItem>
                    <SubItem>
                        <SubTitle>Стор.:</SubTitle>
                        <p>{book.pages}</p>
                    </SubItem>
                 </SubList>
           </BooksItem>
        ))}
        </BooksList></>
}