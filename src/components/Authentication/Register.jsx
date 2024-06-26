import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { NavLink } from "react-router-dom";
// import { Container } from "components/GlobalStyle";
import {
  AuthContainer,
  BackroundAuth,
  ContainerText,
  FormUl,
  LabelForm,
  RegisterButton,
  RegisterForm,
  RegisterH1,
  RegisterH2,
  RegisterIMG,
  RegisterInput,
  RegisterLi,
  RegisterP,
  RegisterUL, 
  Container
} from "./StyledAuth/Register.styled";
import { register } from "../../redux/auth/operation";
import LogoRegister from './img/Vector.svg';
import { fetchUsers } from "../../redux/auth/operation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { passwordStrength } from 'check-password-strength';

export const Register = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.auth.items);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password !== confirmPassword) {
      toast.error("Паролі не співпадають");
      return;
    }

    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
      toast.error("Користувач з такою електронною адресою вже існує");
      return;
    }

    const strength = passwordStrength(password).value;
    if (strength === "Too weak") {
      toast.warn("Пароль недостатньо міцний. Будь ласка, використовуйте більш складний пароль.");
      return;
    }

    const generatedToken = nanoid();

    dispatch(register({
      id: null,
      name: username,
      email: email,
      password: password,
      token: generatedToken,
      IsLoggedIn: true
    }))
      .then(() => {
        console.log("Дані успішно відправлені!");
      })
      .catch((error) => {
        console.error("Помилка відправки даних:", error);
      });
  };

  return (
    <section>
      <Container>
        <BackroundAuth>
          <AuthContainer>
            <RegisterForm onSubmit={handleSubmit}>
              <LabelForm htmlFor="username">
                Ім’я <span>*</span>
                <RegisterInput
                  placeholder="Username"
                  id="username"
                  type="text"
                />
              </LabelForm>
              <LabelForm>
                Електронна адреса <span>*</span>
                <RegisterInput
                  id="email"
                  placeholder="E-mail"
                  type="email"
                />
              </LabelForm>
              <LabelForm>
                Пароль <span>*</span>
                <RegisterInput
                  id="password"
                  placeholder="Password"
                  type="password"
                />
              </LabelForm>
              <LabelForm>
                Підтвердити пароль <span>*</span>
                <RegisterInput
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  type="password"
                />
              </LabelForm>
              <RegisterButton type="submit">Зареєструватися</RegisterButton>
            </RegisterForm>
            <FormUl>
              <li> <p style={{color: "#898F9F"}}>Вже з нами?</p> </li>
              <li> <NavLink to='/login' style={{color: "#FF6B08"}}>Увійти</NavLink></li>
            </FormUl>
          </AuthContainer>
        </BackroundAuth>
        <ContainerText>
          <RegisterH1>Books Reading</RegisterH1>
          <RegisterUL>
            <li>
              <RegisterH2>Допоможе вам</RegisterH2>
            </li>
            <RegisterLi>
              <RegisterIMG src={LogoRegister} alt='' />
              <RegisterP>
                Швидше сформулювати свою ціль і розпочати читати
              </RegisterP>
            </RegisterLi>
            <RegisterLi>
              <RegisterIMG src={LogoRegister} alt='' />
              <RegisterP>
                Пропорційно розподілити навантаження на кожний день
              </RegisterP>
            </RegisterLi>
            <RegisterLi>
              <RegisterIMG src={LogoRegister} alt='' />
              <RegisterP>
                Відстежувати особистий успіх
              </RegisterP>
            </RegisterLi>
          </RegisterUL>
          <RegisterUL>
            <li><RegisterH2>
              Також ви зможете
            </RegisterH2></li>
            <RegisterLi>
              <RegisterIMG src={LogoRegister} alt='' />
              <RegisterP>  Формувати особисту думку незалежну від інших</RegisterP>
            </RegisterLi>
            <RegisterLi>
              <RegisterIMG src={LogoRegister} alt='' />
              <RegisterP>Підвищити свої професійні якості опираючись на нові знання</RegisterP>
            </RegisterLi>
            <RegisterLi>
              <RegisterIMG src={LogoRegister} alt='' />
              <RegisterP>Стати цікавим співрозмовником</RegisterP>
            </RegisterLi>
          </RegisterUL>
        </ContainerText>
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
    </section>
  );
}
