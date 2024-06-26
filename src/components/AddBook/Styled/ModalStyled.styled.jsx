import styled from 'styled-components'
import { NavLink } from "react-router-dom"
import { hover } from '@testing-library/user-event/dist/hover'

export const ModalWindow = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
align-items: center;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);`

    export const ModalBox = styled.div`
 width: 570px;
height: 408px;


    background: #FFF;
box-shadow: 10px 10px 20px 0px rgba(9, 30, 63, 0.20);
display: flex;
flex-direction: column;

padding: 0px 47px;
@media only screen and (max-width: 320px) {
  width: 95%;
height:auto;
padding-bottom: 30px;
}


`

export const Btn = styled(NavLink)`
background-color: #FF6B08;
color: #FFF;
text-align: center;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 38px; 
border: 0px;
width: 230px;
height: 40px;
text-decoration: none;
`

export const InputModal = styled.textarea`
  width: 510px;
  height: 174px;
  border: 1px solid #A6ABB9;
  margin-top: 10px;
  padding: 10px;
  resize: none; /* Забороняє зміну розміру textarea */
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  color: inherit;
`;

export const ListStar = styled.ul`
list-style: none;
display: flex;
gap: 5px;
margin-top: -15px;
margin-left: -40px;

`

export const ContainerBTN  = styled.div`
    
display: flex;
gap: 20px;
margin-top: 30px;
margin-left: 50px;

`
export const ItemResume = styled.h2`
font-family: Montserrat;
font-size: 16px;
font-weight: 500;
line-height: 38px;
color: rgba(36, 42, 55, 1);
margin-left: -10px;



`

export const LabelResume = styled.label`
    
    font-family: Montserrat;
font-size: 16px;
font-weight: 500;
line-height: 38px;
text-align: left;
color: rgba(36, 42, 55, 1);


`


export const BtnClose = styled(NavLink)`
background: rgba(255, 255, 255, 1);
box-shadow: 10px 10px 20px 0px rgba(9, 30, 63, 0.2);

color: rgba(36, 42, 55, 1);
border: 1px solid rgba(36, 42, 55, 1);
text-align: center;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 38px; 
border: 0px;
width: 230px;
height: 40px;
text-decoration: none;
`


export const BtnCloseResum = styled(NavLink)`
background: rgba(255, 255, 255, 1);
box-shadow: 10px 10px 20px 0px rgba(9, 30, 63, 0.2);

color: rgba(36, 42, 55, 1);
border: 1px solid rgba(36, 42, 55, 1);
text-align: center;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 38px; 
border: 0px;
width: 230px;
height: 40px;
text-decoration: none;
position: relative;
left: 100px;
top: 40px;

@media only screen and (max-width: 320px) {
  position: static;
  
 }
`



export const ItemStar = styled.li`
  &:nth-child(1) {
    order: 5; /* Змінив порядок, щоб відображати 5-ту зірочку першою */
  }
  &:nth-child(2) {
    order: 4;
  }
  &:nth-child(3) {
    order: 3;
  }
  &:nth-child(4) {
    order: 2;
  }
  &:nth-child(5) {
    order: 1;
  }

  svg path {
    transition: fill 0.3s ease;
    
  }

  &:hover svg path {
    fill: #FF6B08; /* колір, який ви хочете застосувати при наведенні на будь-яку зірочку */
    stroke: #FF6B08; /* додайте цей рядок, якщо ви хочете, щоб колір рамки також змінювався при наведенні */
  }

`;
