import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const TimerTitle = styled.p`
color: #898F9F;

font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 38px;
@media only screen and (max-width: 320px) {
    text-align: center;
  }

`

export const TimerBox = styled.div`
display: flex;
align-items: center;
justify-content: center;
background: #FFF;
box-shadow: 4px 4px 8px 0px rgba(36, 42, 55, 0.15);
width: 290px;

@media only screen and (max-width: 320px) {
    width: 100%
  }`

export const Numbers = styled.span`
color: #091E3F;
font-family: "Open Sans";
font-size: 25px;
font-style: normal;
font-weight: 700;
line-height: 152%; `

export const SubTitles = styled.p`
color: #898F9F;
text-align: center;
font-family: Montserrat;
font-size: 10px;
font-style: normal;
font-weight: 500;
line-height: 380%;`

export const TimerList = styled.ul`
list-style: none;
display: flex;
align-items: center;
justify-content: center;
gap: 5%;
padding: 0px;
margin: 3px`

export const TimerItem = styled.li`
display: flex;
justify-content: center;`