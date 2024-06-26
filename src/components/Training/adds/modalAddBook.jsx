import {MyTrainingText, MyTrainingDiv, AddButton, InputFinishDate, InputStartDate, OptionBook, SelectBook, SelectDiv, DateDiv,  } from '../styles/Trainingstyle.styled';
import { useDispatch, useSelector } from "react-redux";
import { selectBooks } from "../../../redux/training/selectors";
import {updateFinishDate, updateStartDate,addBook, fetchBooksSelected } from "../../../redux/training/operation";
import { useState } from 'react';
import { toast } from "react-toastify";
import {GoArrowLeft} from "react-icons/go"

export const ModalAddBook = ({delince}) => {
    const dispatch = useDispatch();
    const books = useSelector(selectBooks);
    const userId = localStorage.getItem('id');

    const [selectedBookId, setSelectedBookId] = useState("");

    const handleStartDateChange = (e) => {
        const choosenDate = Date.parse(e.target.value) / 1000;
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
          });
        } else {
          toast.error("Книгу не знайдено!");
        }
      };
    return <>
    <div style={{display: "flex", alignItems: "start", width: "100%"}} >
    <GoArrowLeft color="#FF6B08" size="24px" onClick={delince}/>
    </div>
     <DateDiv>
        <MyTrainingDiv>
            <MyTrainingText>Моє Тренування</MyTrainingText>
          </MyTrainingDiv>
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
      </SelectDiv></>
}