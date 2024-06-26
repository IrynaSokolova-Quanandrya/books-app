import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook, deleteBook, fetchBooksSelected, updateFinishDate, updateStartDate } from "../../../redux/training/operation";
import { selectBooks, selectSelectedBooks } from "../../../redux/training/selectors";
import { ToastContainer, toast } from "react-toastify";
import logoDelete from '../icons/delete.svg';
import bookTraining from '../icons/openBook.svg';
import { AddButton, Img, InputFinishDate, InputStartDate, MdMenuBooks, OptionBook, SelectBook, SelectDiv, Table, Td, Th, Thead, Tr, Tbody, Container, DateDiv } from '../styles/Trainingstyle.styled';
import { MdMenuBook } from "react-icons/md";

export const TrainingFilter = () => {
  const dispatch = useDispatch();
  const books = useSelector(selectBooks);
  const selectedBooks = useSelector(selectSelectedBooks);
  const userId = localStorage.getItem('id');

  const [selectedBookId, setSelectedBookId] = useState("");
  const [startDate, setStartDate] = useState("");
  const [finishDate, setFinishDate] = useState("");
  const [inputValue, setInputValue] = useState('');
  const [selectValue, setSelectValue] = useState('');

  const handleStartDateChange = (e) => {
    const choosenDate = Date.parse(e.target.value) / 1000;
    setStartDate(choosenDate);
    dispatch(updateStartDate({
      startDate: choosenDate,
      finishDate: null,
      selectedBooks: [],
      checkout: [],
      prevChekout: [], 
      userId,
      isStarted: false,
      id: null,
    }));
  };

  const handleFinishDateChange = (e) => {
    const choosenDate = Date.parse(e.target.value) / 1000;
    setFinishDate(choosenDate);
    dispatch(updateFinishDate(choosenDate));
  };

  const handleBookSelect = (e) => {
    setSelectedBookId(e.target.value);
  };

  const handleAddBook = () => {
    const selectedBook = books.find(book => book.id === selectedBookId);
    if (selectedBook) {
      dispatch(addBook(selectedBook)).then(() => {
        dispatch(fetchBooksSelected()); // Оновлення списку вибраних книг після успішного додавання
        setSelectedBookId("")
      });
    } else {
      toast.error("Книгу не знайдено!");
    }
  };
  
  const handleDeleteBook = (bookId) => {
    dispatch(deleteBook(bookId)).then(() => {
      dispatch(fetchBooksSelected()); // Оновлення списку вибраних книг після успішного видалення
    });
  };

  return (
    <div>
      <DateDiv>
        <InputStartDate
          type="date"
          placeholder="Початок"
          onChange={handleStartDateChange}
        />
        <InputFinishDate
          type="date"
          placeholder="Закінчення"
          onChange={handleFinishDateChange}
        />
      </DateDiv>
      <SelectDiv>
        <SelectBook onChange={handleBookSelect} value={selectedBookId}>
          <option value="">Виберіть книгу</option>
          {books.map((book) => (
            <OptionBook key={book.id} value={book.id}>
              {book.title}
            </OptionBook>
          ))}
        </SelectBook>
        <AddButton onClick={handleAddBook}>Додати</AddButton>
      </SelectDiv>
      <Container>
        <Table>
          <Thead>
            <tr>
              <Th>Назва книги</Th>
              <Th>Автор</Th>
              <Th>Рік</Th>
              <Th>Стор.</Th>
              <Th></Th>
            </tr>
          </Thead>
          <Tbody>
          <div height="20px"></div>
            {selectedBooks.map((book) => (
              <Tr key={book.id}> 
                <td><Img src={bookTraining} alt=""/> {book.title}</td>
                <td>{book.author}</td>
                <td>{book.year}</td>
                <td>{book.pages}</td>
                <td> 
                  <img onClick={() => handleDeleteBook(book.id)} src={logoDelete} alt="" />
                </td>
              </Tr>
              
            ))}
              <Tr>
                <td colSpan="3"><Img src={bookTraining} alt=""/>...</td>
              </Tr>
          </Tbody>
        </Table>
      </Container>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};