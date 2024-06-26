import React, { useState } from 'react';
import { Btn, BtnClose, ContainerBTN, InputModal, ItemResume, ItemStar, ListStar, ModalBox, ModalWindow } from './Styled/ModalStyled.styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Modal = ({ onClose, onSave }) => {
  const [inputValue, setInputValue] = useState('');
  const [rating, setRating] = useState(0);

  const handleSave = () => {
    if (inputValue.trim() === '') {
      toast.error('Будь ласка, введіть резюме.');
    } else if (rating === 0) {
      toast.error('Будь ласка, оберіть рейтинг.');
    } else {
      onSave(rating, inputValue);  // Передаємо рейтинг і резюме в onSave
    }
  };

  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  return (
    <ModalWindow>
      <ModalBox>
        <ItemResume>Обрати рейтинг книги</ItemResume>
        <ListStar>
          {[...Array(5)].map((_, index) => (
            <ItemStar key={index} onClick={() => handleStarClick(index)}>
              <svg width="17" height="16" viewBox="0 0 17 16" fill={index < rating ? "#FF6B08" : "none"} xmlns="http://www.w3.org/2000/svg">
                <path d="M8.5 1.61804L9.93284 6.02786L10.0451 6.37336H10.4084L15.0451 6.37336L11.2939 9.09878L11 9.31231L11.1123 9.6578L12.5451 14.0676L8.79389 11.3422L8.5 11.1287L8.20611 11.3422L4.45488 14.0676L5.88772 9.6578L5.99998 9.31231L5.70609 9.09878L1.95486 6.37336L6.59163 6.37336H6.9549L7.06716 6.02786L8.5 1.61804Z" stroke="#FF6B08" />
              </svg>
            </ItemStar>
          )).reverse()}
        </ListStar>

        <form action="">
          <label>
            Резюме
            <InputModal type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          </label>
        </form>
        <ContainerBTN>
          <BtnClose onClick={onClose}>Назад</BtnClose>
          <Btn onClick={handleSave}>Зберегти</Btn>
        </ContainerBTN>
      </ModalBox>
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
    </ModalWindow>
  );
};
