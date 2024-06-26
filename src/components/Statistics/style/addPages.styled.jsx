import styled from 'styled-components'

export const Input = styled.input`
color: #242A37;
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 38px; 
border: 1px solid #A6ABB9;
background-color: #F6F7FB;
max-width: 110px;
max-height: 42px;`

export const Label = styled.label`
display: flex;
flex-direction: column;
color: #898F9F;
font-family: Montserrat;
font-size: 11px;
font-style: normal;
font-weight: 500;
line-height: 38px;`

export const Title = styled.h5`
color: #242A37;
text-align: center;
font-family: Montserrat;
font-size: 12px;
font-style: normal;
font-weight: 700;
line-height: 38px;
text-transform: uppercase;
margin: 0px`

export const StatisticList = styled.ul`
padding: 0px;
list-style: none;
max-height: 200px;
overflow: scroll;
overflow-x: hidden;
scrollbar-width: thin;
display: flex;
flex-direction: column;
justify-content: center;
align-items: left;
border-top: 1px solid #E0E5EB;
margin: 0px 10px`

export const StatisticItem = styled.li`
display: flex;
gap: 15px;`

export const Date = styled.p`
color: var #242A37;
text-align: center;
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 38px; 
text-transform: uppercase;`

export const Time = styled.p`
color: #898F9F;
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 38px; 
text-transform: uppercase;`

export const Pages = styled.p`
color: #898F9F;
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 38px;`

export const PageNumber = styled.span`
color: #242A37;
text-align: right;
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 38px; 
text-transform: uppercase;`

export const StatBox = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const StatForm = styled.form`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
gap: 20px;

@media only screen and (max-width: 770px) {
    width: 100%;

    align-items: flex-end;
    
 }
`
export const StatBtn = styled.button`
background-color: #FF6B08;
color: #FFF;
text-align: center;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 38px; 
border: 0px;
width: 90%;
@media only screen and (max-width: 770px) {
    width: 30%;
 }
 @media only screen and (max-width: 320px) {
    width: 90%;
 }
`
