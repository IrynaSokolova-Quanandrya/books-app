import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addBook } from '../../redux/library/operation';
import { BookButton, TitleLabelBook, FormContainer2, InputBook, InputBookSecond, InputBookThirth, InputBookThirth2, LabelBook } from './Styled/StyledList.styled';

export const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');
  const [pages, setPages] = useState('');

  const dispatch = useDispatch();

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

  return (
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
  );
};
