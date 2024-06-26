import { selectSelectedBooks} from "../../../redux/training/selectors";
import {useDispatch, useSelector } from "react-redux";
import {deleteBook, fetchBooksSelected} from "../../../redux/training/operation";
import { BooksItem, BooksList, SubItem, SubList, SubTitle, TitleBox } from "../styles/Trainingstyle.styled";
import bookTraining from '../icons/openBook.svg';
import logoDelete from '../icons/delete.svg';
import { Img } from "../styles/Trainingstyle.styled";

export const MobileBooksList = ()=>{
    const selectedBooks = useSelector(selectSelectedBooks);
    const dispatch = useDispatch()
    
    const handleDeleteBook = (bookId) => {
        dispatch(deleteBook(bookId)).then(() => {
          dispatch(fetchBooksSelected());
        });
      };
    return <>
    <BooksList>
        {selectedBooks.length === 0 &&  <BooksItem >
            <TitleBox>
            <Img src={bookTraining} alt=""/>
                <p>
                ...
                 </p>
                
                 </TitleBox>
                 <SubList>
                    <SubItem>
                        <SubTitle>Автор:</SubTitle>
                        <p>...</p>
                    </SubItem>
                    <SubItem>
                        <SubTitle>Рік:</SubTitle>
                        <p>...</p>
                    </SubItem>
                    <SubItem>
                        <SubTitle>Стор.:</SubTitle>
                        <p>...</p>
                    </SubItem>
                 </SubList>
           </BooksItem>}
    {selectedBooks.map((book) => (
           <BooksItem key={book.id}>
            <TitleBox>
            <Img src={bookTraining} alt=""/> 
            <p style={{maxWidth: "50%",  overflowWeap: "break-word"}}>
                {book.title} 
                 </p>
                 <img style={{position: "absolute", top: "8.7%", right: "8.7%"}} onClick={() => handleDeleteBook(book.id)} src={logoDelete} alt="" />
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