import { BookButton, TitleLabelBook, FormContainer2, InputBook, InputBookSecond, InputBookThirth, InputBookThirth2, LabelBook } from './Styled/StyledList.styled';
import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
import { toast } from "react-toastify";
import {GoArrowLeft} from "react-icons/go"
import { addBook } from '../../redux/library/operation';

export const MobileBookForm = ({delince}) => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');
  const [pages, setPages] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      id: Math.random().toString(36).substr(2, 9),
      title,
      author,
      year,
      pages,
      status: "planning"
    };
    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
    setYear('');
    setPages('');
  };
   
    
     
      
    return <>
    <div style={{display: "flex", alignItems: "start", width: "100%"}} >
    <GoArrowLeft color="#FF6B08" size="24px" onClick={delince}/>
    </div>
    <FormContainer2 onSubmit={handleSubmit}>
      <TitleLabelBook>
        Назва книги:
        <InputBook type="text" placeholder="..." value={title} onChange={(e) => setTitle(e.target.value)} />
      </TitleLabelBook>
      <LabelBook>
        Автор:
        <InputBookSecond type="text" placeholder="..." value={author} onChange={(e) => setAuthor(e.target.value)} />
      </LabelBook>
      <LabelBook>
        Рік:
        <InputBookThirth2 type="text" placeholder="..." value={year} onChange={(e) => setYear(e.target.value)} />
      </LabelBook>
      <LabelBook>
        Кількість сторінок:
        <InputBookThirth type="text" placeholder="..." value={pages} onChange={(e) => setPages(e.target.value)} />
      </LabelBook>
      <BookButton type="submit">Додати книгу</BookButton>
    </FormContainer2>
     </>
}