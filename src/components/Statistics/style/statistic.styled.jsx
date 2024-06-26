import styled from 'styled-components'

export const BigContainer = styled.div`
width: 100%;
display: flex;
gap: 40px;
align-items: flex-start;
justify-content: center;
@media only screen and (max-width: 770px) {
    width: 100%;
    flex-direction: column;
 }`

export const SmallContainer = styled.div`
width: 23%;
display: flex;
flex-direction: column;
gap: 25px;
background-color: #FFF;
box-shadow: 0px 2px 3px 0px rgba(9, 30, 63, 0.25);
padding: 12px;
@media only screen and (max-width: 770px) {
    width: 100%;
 }
`

export const GoalContainer = styled.div`
width: 23%;
height: 100%;
display: flex;
background-color: #FFF;
box-shadow: 0px 2px 3px 0px rgba(9, 30, 63, 0.25);
@media only screen and (max-width: 770px) {
    width: 100%;
    height: auto;
 }

`

export const MediumContainer = styled.div`
width: 70%;
display: flex;
flex-direction: column;
gap: 45px;

@media only screen and (max-width: 770px) {
    width: 100%;
    align-items: center;
 }

`

export const TimersContainer = styled.div`
display: flex;
gap: 68px;
align-items: center;
justify-content: center;
@media only screen and (max-width: 320px) {
    width: 100%;
    flex-direction: column;
    gap: 14px;
  }`
export const MegaContainer = styled.div`
max-width: 100%;
max-height: 100%;
display: flex;
flex-direction: column;
gap: 40px;
align-items: center;
justify-content: center;
margin: 0px 40px;
margin-bottom: 40px;
margin-top: 50px;

@media only screen and (max-width: 320px) {
    margin: 0px 25px;
margin-bottom: 33px;
margin-top: 15px;
  }`

export const ChartContainer = styled.div`
width: 68%;
background-color: #FFF;
box-shadow: 0px 2px 3px 0px rgba(9, 30, 63, 0.25); 
min-height: 300px;
display: flex;
align-items: center;
justify-content: center;
padding: 20px;

@media only screen and (max-width: 770px) {
    width: 100%;
 }`
