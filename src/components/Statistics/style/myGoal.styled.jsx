import styled from "styled-components";
import { NavLink } from "react-router-dom"

export const ContainerMyGoal = styled.div`
    width: 275px;
    height: 318px;
    top: 110px;
    left: 966px;
`;

export const MyGoalContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    justify-content: center;

    @media only screen and (max-width: 770px) {
        flex-direction: row;
        padding: 23px;
        gap: 20px;
     }

     @media only screen and (max-width: 320px) {
        flex-direction: column;
        padding: 0;
        gap: 0;
      }
    
`;
export const GoalList = styled.ul`
    list-style: none;
    display: flex;
    gap: 15px;
    align-items: center;
justify-content: center;
margin: 120px 0px;
padding: 0px;
@media only screen and (max-width: 770px) {
    flex-direction: row;
    margin: 0px;
    gap: 12px;
    align-items: flex-end;
 }

 @media only screen and (max-width: 320px) {
    width: 100%;
    margin: 25px 30px;
 }

`;

export const GoalItem = styled.li`
    
    display: flex;
    flex-direction: column;
    align-items: center;
justify-content: center;

`;
export const GoalTextDiv = styled.div`
    background: #B1B5C2;
    width: 100%;
    @media only screen and (max-width: 770px) {
        width: 40%;
        padding: 12px;
     }
    
     @media only screen and (max-width: 320px) {
        width: 100%;
        padding: 0;
     }
`;
export const GoalText = styled.h3`
    font-family: Montserrat;
    font-size: 20px;
    font-weight: 600;
    line-height: 38px;
    text-align: center;
    color: #FFFFFF;
    white-space: nowrap;
    width: 100%;

`;
export const GoalP = styled.p`
color: #091E3F;
text-align: center;
font-family: "Open Sans";
font-size: 36px;
font-style: normal;
font-weight: 700;
line-height: 38px;


`;
export const GoalTextPDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #F5F7FA;
box-shadow: 4px 4px 8px 0px rgba(36, 42, 55, 0.15);
width: 66px;
height: 66px;
@media only screen and (max-width: 770px) {
    width: 100px;
height: 60px;
 }

 @media only screen and (max-width: 320px) {
    width: 63px;
height: 63px;
 }
`;
export const GoalTextP = styled.p`
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 500;
    line-height: 17.07px;
    text-align: center;
    color: #898F9F;

    @media only screen and (max-width: 770px) {
    margin-bottom: 0px
 }

   @media only screen and (max-width: 320px) {
    font-size: 11px;
    line-height: normal;
    max-width: 63px;
 }

`;

export const SpshGoalP = styled.p`
text-align: center;
font-family: "Open Sans";
font-size: 36px;
font-style: normal;
font-weight: 700;
line-height: 38px; 
    color: #FF6B08;
`;
export const MyGoalColor = styled.div`
    background: white;
    align-items: center;
`;

export const ExitBtn = styled.button`
background-color: #B1B5C2;
color: #FFF;
text-align: center;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 600;
border: 0px;
width: 230px;
height: auto;
text-decoration: none;
margin-bottom: 20px;
padding-top: 10px;
padding-bottom: 10px;

@media only screen and (max-width: 770px) {
    padding-bottom: 10px;
 }
`