import styled from "styled-components";
import AuthBackround from '../img/pic.jpg';
import { NavLink } from "react-router-dom";

export const Container = styled.div`
display: flex;
width: 100%;
height: 100%;
@media only screen and (max-width: 770px) {
  flex-direction: column;
  align-item: center;



}`

export const BackroundAuth = styled.div`
  width: 565px;
  height: 650px; 
  background-color: #2f303a;
  background-image: linear-gradient(
    to right,
    rgba(9, 30, 63, 0.8),
    rgba(9, 30, 63, 0.8)
  ),
  url(${AuthBackround});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media only screen and (max-width: 1200px) {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto; /* Центрування */



  }

   @media only screen and (max-width: 770px) {
    width: 100%;
    margin:0;
  }
  
`;

export const AuthContainer = styled.div`
  width: 430px;
  height: 560px;
  background: white;
  padding-top: 30px;
  



  @media only screen and (max-width: 770px) {
    height: auto;
    padding: 0;
  };

  @media only screen and (max-width: 320px) {
    background: none;
    width: 100%;
    margin: 20px 25px
   }
`;

export const RegisterInput = styled.input`
  width: 320px;
  height: 42px;
  border: 1px solid #1D1D1B26;
  box-shadow: 0px 1px 2px 0px #1D1D1B26 inset;
  background: #F5F7FA;
  display: block;

  @media only screen and (max-width: 320px) {
  
    text-align: center;
 
    width: 100%;
  
  }
`;

export const RegisterButton = styled.button`
  width: 320px;
  height: 60px;
  color: #FFFFFF;
  background: #FF6B08;
  display: block;
  border: 0px;
  margin-top: 20px;

  @media only screen and (max-width: 320px) {
    width: 100%;
  
  }
`;

export const LoginLink = styled(NavLink)`
  color: #FF6B08;
  text-decoration: none;
`;

export const ContainerText = styled.div`
 
display: flex;
flex-direction: column; 
align-items: center;
justify-content: center;
padding-left: 90px;
  

  @media only screen and (max-width: 1200px) {
    position: static;
    transform: none;
    margin-top: 20px;
    text-align: center;
  }

  @media only screen and (max-width: 770px) {
   padding: 0;
  }
  
  @media only screen and (max-width: 320px) {
    display: none;
   }

`;

export const FormUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
 gap: 5px;

 padding: 0;
`;

export const RegisterForm = styled.form`
  margin-top: 80px;
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%
  // @media only screen and (max-width: 320px) {
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: center;
  //   align-items: center;
  //   gap: 10px;
  // }

`;

export const LabelForm = styled.label`
  
  color: #898F9F;
  @media only screen and (max-width: 320px) {
    width: 100%;
    display: block;
    margin: 0;
  }
`;

export const RegisterH1 = styled.h1`
  font-family: Abril Fatface;
  font-size: 34px;
  font-weight: 400;
  line-height: 38px;
  text-align: left;
  color: #242A37;
  justify-content: center;
  align-items: center;
  

  @media only screen and (max-width: 1200px) {
    margin-left: 0;
    text-align: center;
    margin-bottom: 20px;
  }
`;

export const RegisterH2 = styled.h2`
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 500;
  margin-left: -20px;

  @media only screen and (max-width: 1200px) {
    margin-left: 0;
    text-align: center;
  }
`;

export const RegisterUL = styled.ul`
  list-style: none;
  margin-top: 50px;

  @media only screen and (max-width: 1200px) {
    margin-top: 20px;
    padding: 0;
  }
  @media only screen and (max-width: 770px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const RegisterP = styled.p`
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  text-align: left;
  color: #898F9F;
`;

export const RegisterLi = styled.li`
  display: flex;

  @media only screen and (max-width: 1200px) {
    justify-content: center;
  }
`;

export const RegisterIMG = styled.img`
  margin-right: 5px;
`;
