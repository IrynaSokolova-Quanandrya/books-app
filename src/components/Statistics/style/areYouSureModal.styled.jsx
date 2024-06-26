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
    height: 206px;
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
    height: 223px;
 `

export const YesBtn = styled(NavLink)`
background-color: #FF6B08;
color: #FFF;
text-align: center;
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 38px;
border: 0px;
width: 130px;
height: 40px;
text-decoration: none;
@media only screen and (max-width: 320px) {
    width: 97px;
 `

export const NoBtn = styled.button`
background-color: #FFF;
color: #242A37;
text-align: center;
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 38px;
border: 1px solid #242A37;
width: 130px;
height: 40px;
text-decoration: none;
@media only screen and (max-width: 320px) {
    width: 97px;
 }`

export const BtnDiv = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 30px;

@media only screen and (max-width: 320px) {
    gap: 15px;
 }`