import {useDispatch, useSelector } from "react-redux";
import {
   BooksItem, BooksList, SubItem, SubList, SubTitle, TitleBox, ListStar, ResumeBTN,
   PlaningReadingItem, MobileResumeBox, ContainerFirst, ContainerH2,
   ContainerH2Second, ContainerTextSecond,
   ContainerTitle, ListText, VectorBook,  BookFirst, BookFirst2, } from "./Styled/StyledList.styled";
import bookTraining from '../Training/icons/openBook.svg';
import logoDelete from '../Training/icons/delete.svg';
import { Img } from "./Styled/StyledList.styled";
import { deleteBook, addResum } from "../../redux/library/operation";
import { useEffect, useState } from 'react';
import BookListIcon from '../Header/Icon/icon library.svg';
import Vector from './Icons/Vector (4).svg';
import Flag from './Icons/flag.svg';
import { Modal } from './modalbooks';
import { ModalResum } from './modalResum';
import Flat from './Icons/Flat.svg';

export const MobileBooksList = ()=>{
    const books = useSelector(state => state.books.booksBD);
    const dispatch = useDispatch()
    const [bookRatings, setBookRatings] = useState({})
    const [resumes, setResumes] = useState({});
    const [modalTreaker, setModalTreaker] = useState(false);
  const [currentBookId, setCurrentBookId] = useState(null);
  const [modalTreakerResums, setModalTreakerResums] = useState(false);

  useEffect(() => {
    const calculateRatings = () => {
      const ratings = {};
      books.forEach(book => {
        if (book.resum && book.resum.rating) {
          ratings[book.id] = book.resum.rating;
        }
      });
      setBookRatings(ratings);
    };

    calculateRatings();
  }, [books]);

    const handleDeleteBook = bookId => {
      console.log("Deleting book with ID:", bookId);
      dispatch(deleteBook(bookId));
    };

    const handleOpenResume = (bookId) => {
      setCurrentBookId(bookId);
      setModalTreaker(true);
    };

    const handleOpenResumeAdd = (bookId) => {
      setCurrentBookId(bookId);
      setModalTreakerResums(true);
    };

    const handleCloseSaveResume = (rating, resume) => {
      console.log("Saving with rating:", rating, "and resume:", resume);
      dispatch(addResum({
        bookId: currentBookId,
        rating,
        resume
      }));
      setResumes(prev => ({ ...prev, [currentBookId]: resume }));
      setModalTreaker(false);
      setCurrentBookId(null);
    
      // Оновлюємо рейтинг для книги, якщо він був доданий
      setBookRatings(prevRatings => ({
        ...prevRatings,
        [currentBookId]: rating
      }));
    };

    const handleCloseESCResume = () => {
      setModalTreaker(false);
      setCurrentBookId(null);
    };

    const handleCloseResume = () => {
      setModalTreakerResums(false);
      setCurrentBookId(null);
    };
    
    const planningBooks = [];
    const readingBooks = [];
    const completedBooks = [];
  
    books.forEach(book => {
      if (book.status === "planning") {
        planningBooks.push(book);
      } else if (book.status === "reading") {
        readingBooks.push(book);
      } else if (book.status === "completed") {
        completedBooks.push(book);
      }
    });

    if (!books || books.length === 0) {
      return (
        <ContainerFirst>
          <ContainerTitle>Крок 1.</ContainerTitle>
          <BookFirst src={BookListIcon} alt="" />
          <ContainerH2>Створіть особисту бібліотеку</ContainerH2>
          <VectorBook src={Vector} alt="" />
          <ListText>Додайте до неї книжки, які маєте намір прочитати.</ListText>
          <ContainerTextSecond>
            <ContainerTitle> Крок 2.</ContainerTitle>
            <BookFirst2 src={Flag} alt="" />
            <ContainerH2Second> Сформуйте своє перше тренування</ContainerH2Second>
            <VectorBook src={Vector} alt="" />
            <ListText>Визначте ціль, оберіть період, розпочинайте тренування</ListText>
          </ContainerTextSecond>
        </ContainerFirst>
      );
    }

    return <>
    {modalTreaker && <Modal bookId={currentBookId} onClose={handleCloseESCResume} onSave={handleCloseSaveResume} />}
      {modalTreakerResums && <ModalResum bookId={currentBookId} onClose={handleCloseResume} />}
     {completedBooks.length > 0 && <>
     <PlaningReadingItem>Прочитано</PlaningReadingItem>
      <BooksList>
    {completedBooks.map((book) => (
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
                    <SubItem>
                        <SubTitle>Рейтинг:</SubTitle>
                       
                        <ListStar>
  {Array(5).fill(false).map((_, index) => (
    <li key={index}>
      <svg width="17" height="16" viewBox="0 0 17 16" fill={index < bookRatings[book.id] ? '#FF6B08' : 'none'} xmlns="http://www.w3.org/2000/svg">
        <path d="M8.5 1.61804L9.93284 6.02786L10.0451 6.37336H10.4084L15.0451 6.37336L11.2939 9.09878L11 9.31231L11.1123 9.6578L12.5451 14.0676L8.79389 11.3422L8.5 11.1287L8.20611 11.3422L4.45488 14.0676L5.88772 9.6578L5.99998 9.31231L5.70609 9.09878L1.95486 6.37336L6.59163 6.37336H6.9549L7.06716 6.02786L8.5 1.61804Z" stroke='#FF6B08'  />
      </svg>
    </li>
  ))}
</ListStar>

                    </SubItem>
                    <SubItem>
                    <MobileResumeBox>
                      {resumes[book.id] || book.resum ? (
                    <ResumeBTN onClick={() => handleOpenResumeAdd(book.id)}>Моє резюме</ResumeBTN>
                  ) : (
                    <ResumeBTN onClick={() => handleOpenResume(book.id)}>Додати резюме</ResumeBTN>
                  )}
                        </MobileResumeBox>
                    </SubItem>
                 </SubList>
           </BooksItem>
           
        )) }</BooksList> </>}
        
        {readingBooks.length > 0 && <>
     <PlaningReadingItem>Читаю</PlaningReadingItem>
      <BooksList>
    {readingBooks.map((book) => (
           <BooksItem key={book.id}>
            <TitleBox>
            <Img src={Flat} alt="" /> 
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
           
        )) }</BooksList> </>}
        
        {planningBooks.length > 0 && <>
     <PlaningReadingItem>Маю намір прочитати</PlaningReadingItem>
      <BooksList>
    {planningBooks.map((book) => (
           <BooksItem key={book.id}>
            <TitleBox>
            <Img src={bookTraining} alt="" /> 
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
           
        )) }</BooksList> </>}</>
       
    }