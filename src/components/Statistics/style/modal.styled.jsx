import styled from 'styled-components'
import { NavLink } from "react-router-dom"

export const ModalWindow = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);`

    export const ModalBox = styled.div`
    width: 390px;
    height: 290px;
    background: #FFF;
box-shadow: 10px 10px 20px 0px rgba(9, 30, 63, 0.20);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0px 47px;
text-align: center;

@media only screen and (max-width: 320px) {
    width: 100%;
    height: 296px;
 }`

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
@media only screen and (max-width: 320px) {
    width: 97px;
 }
`