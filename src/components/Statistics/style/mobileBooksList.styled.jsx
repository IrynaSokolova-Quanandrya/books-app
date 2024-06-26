import styled from 'styled-components'

export const BooksList = styled.ul`
list-style: none;
display: flex;
flex-direction: column;
padding: 0px;
margin: 0px;
width: 100%;
align-items: center;
color: #242A37;
font-family: Montserrat;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: normal;`

export const TitleBox = styled.div`
display: flex;
align-items: center;
gap: 20px;
`

export const BooksItem = styled.li`
display: flex;
flex-direction: column;
width: 100%;
gap: 5px;
border-top: 1px solid #E0E5EB;
border-bottom: 1px solid #E0E5EB;
padding-top: 25px;
padding-bottom: 25px;
padding-left: 5px;`

export const SubList = styled.ul`
list-style: none;
display: flex;
flex-direction: column;
padding: 0px;
margin: 0px;
margin-left: 35px;`

export const SubItem = styled.li`
display: flex;
align-items: center;
`

export const SubTitle = styled.p`
color: #898F9F;
font-family: Montserrat;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: 38px; 
width: 70px;
text-align: start;`