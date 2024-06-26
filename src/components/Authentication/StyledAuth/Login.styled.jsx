import styled from "styled-components";
import AuthBackround from '../img/pic.jpg';

export const Container = styled.div`
display: flex;
width: 100%;
height: 100%;
align-items: center;

@media only screen and (max-width: 770px) {
  flex-direction: column;

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
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto; /* Центрування */
}
@media only screen and (max-width: 770px) {
   width: 100%;
   margin:0;
 }

 @media only screen and (max-width: 320px) {
   width:100%;
   margin: 0;
   height: 400px;
}
  
`;

export const ContainerText = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: auto;
 

  @media only screen and (max-width: 1200px) {
    margin-top: 20px;
    text-align: center;
  }

  @media only screen and (max-width: 770px) {
   padding: 0;
  }
  
  @media only screen and (max-width: 320px) {
    width: 100%;
   }
`;
export const AuthContainer = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;

   @media only screen and (max-width: 770px) {
      flex-direction: column;
      height: auto;
      padding: 0;
    };
  
    @media only screen and (max-width: 320px) {
      background: none;
      width: 100%;
      margin: 20px 25px;

     }
`;

export const LoginContainer = styled.div`
   width: 400px;
   background: white;
   padding-bottom: 20px;

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

export const LoginText = styled.p`
   font-family: Montserrat;
   font-size: 24px;
   font-weight: 500;
   line-height: 38px;
   text-align: center;
   color: #242A37;
   width: 397px;

   @media only screen and (max-width: 770px) {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
   }
  
   @media only screen and (max-width: 770px) {
font-size: 13px;
font-style: normal;
line-height: normal;
width: auto;
   }
`;

export const LoginIMG = styled.img`
   justify-content: center;
   align-items: Center;

   @media only screen and (max-width: 770px) {


 justify-content: center;
 align-items: center;
   }
`;

export const LineLoginIMG = styled.img`

   @media only screen and (max-width: 770px) {
      margin: 0 auto;
      display: block;
   }
`;

export const LoginAuthor = styled.p`
   font-family: Montserrat;
   font-size: 14px;
   font-weight: 500;
   text-align: left;
   color: #898F9F;

   @media only screen and (max-width: 770px) {
      text-align: center;
      
   }
`;
