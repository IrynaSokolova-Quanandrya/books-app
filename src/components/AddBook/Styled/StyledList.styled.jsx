import styled from "styled-components";

export const ContainerFirst = styled.div`
  width: 570px;
  height: 270px;
  background-color: #ffffff;
  box-shadow: 0px 2px 3px 0px #091E3F1A;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto; /* Додано */
`;


export const ContainerTitle = styled.h1`
font-family: "Montserrat";
font-size: 19px;
font-weight: 600;
line-height: 38px;
text-align: left;
color: #242A37;
position: relative;
left: 20px;

`


export const ContainerH2 = styled.h2`
    font-family: "Montserrat";
font-size: 16px;
font-weight: 600;
line-height: 38px;
text-align: left;
color: #242A37;
margin-left: 50px;
margin-top: -50px;


`



export const ListText = styled.p`

font-family: "Montserrat";
font-size: 14px;
font-weight: 400;
line-height: 38px;
text-align: left;
color: #898F9F;
  margin-left: 70px;

position: relative;
top: -57px;



`

export const ItemTextLi = styled.li`
    list-style: none;



`

export const BookFirst = styled.img`
    margin-left: 10px;

position: relative;
top: -10px;

`

export const VectorBook = styled.img`
    margin-left: 50px;

position: relative;
top: -18px;

`

export const ContainerTextSecond = styled.div`
 margin-top: -50px;

`

export const ContainerH2Second = styled.h2`
    font-family: "Montserrat";
font-size: 16px;
font-weight: 600;
line-height: 38px;
text-align: left;
color: #242A37;
margin-left: 50px;
margin-top: -40px;


`

export const BookFirst2 = styled.img`
    margin-left: 20px;

position: relative;
top: -10px;

`






export const InputBook = styled.input`
  width: 346px;
  height: 42px;
  background: #f6f7fb;
  border: 1px solid #a6abb9;
  box-shadow: 0px 1px 2px 0px #1d1d1b26 inset;
  margin-top: 8px; /* Додаємо відступ між лейблом та інпутом */
  display: block; /* Забезпечуємо блоковий контекст для розміщення лейбла над інпутом */
  @media only screen and (max-width: 770px) {
    width: 100%;
    
 }
`;

export const InputBookSecond = styled.input`
  width: 250px;
  height: 42px;
  background: #f6f7fb;
  border: 1px solid #a6abb9;
  margin-top: 8px; /* Додаємо відступ між лейблом та інпутом */
  display: block; /* Забезпечуємо блоковий контекст для розміщення лейбла над інпутом */
  @media only screen and (max-width: 320px) {
    width: 100%;
 }
`;

export const InputBookThirth = styled.input`
  width: 130px;
  height: 42px;
  background: #f6f7fb;
  border: 1px solid #a6abb9;
  margin-top: 8px; /* Додаємо відступ між лейблом та інпутом */
  display: block; /* Забезпечуємо блоковий контекст для розміщення лейбла над інпутом */
  @media only screen and (max-width: 320px) {
    width: 100%;
 }
`;

export const InputBookThirth2 = styled.input`
  width: 130px;
  height: 42px;
  background: #f6f7fb;
  border: 1px solid #a6abb9;
  margin-top: 8px; /* Додаємо відступ між лейблом та інпутом */
  display: block; /* Забезпечуємо блоковий контекст для розміщення лейбла над інпутом */
  @media only screen and (max-width: 320px) {
    width: 100%;
 }
`;

export const BookButton = styled.button`
  width: 171px;
  height: 42px;
  border: 1px solid #242a37;
  font-family: 'Montserrat';
  font-size: 14px;
  font-weight: 500;
  line-height: 38px;
  text-align: left;
  color: #000000;
  background: #f6f7fb;
  text-align: center;
  margin-top: 50px; /* Додаємо відступ зверху для кнопки */
  margin-left: 40px;
  @media only screen and (max-width: 770px) {
    margin: 0;
 }
`;

export const FormContainer2 = styled.form`
  display: flex;
  width: 100%;
  align-items: flex-end;
  justify-content: center;

  gap: 20px; /* Додаємо відстань у 20px між елементами */
  margin-bottom: 30px;

  @media only screen and (max-width: 770px) {
    flex-wrap: wrap;
    align-items: center;
 }

 @media only screen and (max-width: 320px) {
  flex-direction: column;
  gap: 10px;
}
`;

export const LabelBook = styled.label`
  font-family: "Montserrat";
  font-size: 14px;
  font-weight: 500;
  line-height: 38px;
  color: #898F9F;
  display: block; /* Забезпечуємо блоковий контекст для розміщення лейбла над інпутом */

  @media only screen and (max-width: 320px) {
    width: 100%;
 }
  
`;

export const TitleLabelBook = styled.label`
  font-family: "Montserrat";
  font-size: 14px;
  font-weight: 500;
  line-height: 38px;
  color: #898F9F;
  display: block; /* Забезпечуємо блоковий контекст для розміщення лейбла над інпутом */

  @media only screen and (max-width: 770px) {
    width: 100%;
 }
  
`;

export const SpinerContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 200px;
`


export const MegaContainer = styled.div`

max-width: 100%;
max-height: 100%;
margin: 30px 40px;


@media only screen and (max-width: 770px) {
    margin: 20px 45px;
 }
 
 @media only screen and (max-width: 320px) {
  position: relative;
  margin: 20px 25px;
  margin-bottom: 65px;
}`


export const ContainerMapBook = styled.div`
  display: flex;
  width: 1402px;
  height: 62px;
  background-color: #ffffff;
  box-shadow: 0px 2px 3px 0px #091E3F1A;

  align-items: center;
  position: relative;
  margin: 10px 60px;

 
`;

export const ContainerH3 = styled.div`
  display: flex;


 
`;
export const TDBooksIMG = styled.img`
margin-left: 1100px;
`

export const TDBooksText = styled.td`

`

export const TDBooksTextYears = styled.p`


`
export const H3BooksTextYears = styled.h3`


`
export const H3BooksTextPages = styled.h3`


`

export const TDBooksTextAuthor = styled.td`

`

export const TDBooksTextTitle = styled.td`

`

export const ListH3 = styled.ul`

display: flex;
list-style: none;
justify-content: space-between;
`





export const Tr = styled.tr`
    font-family: "Montserrat";
    font-size: 14px;
    font-weight: 500;
    line-height: 38px;
    text-align: left;
    color: #242A37;
    background-color: #ffffff;
    width: 1202px;
height: 62px;
box-shadow: 0px 2px 3px 0px #091E3F1A;



`;
export const Th = styled.th`

`;

export const Img = styled.img`
    padding-right: 10px;
    width: 22px;
    height: 17px;
    margin-left: 20px;
`;

export const TableBook = styled.table`
    
    width: 100%;
    height: 233px;
    top: 329px;
    left: 39px;
    font-family: "Montserrat";
    font-size: 14px;
    font-weight: 500;
    line-height: 38px;
    text-align: left;
`;
export const Thead = styled.thead`
    color: #898F9F;
`;


export const TDBooks = styled.td`

max-height:  62px;


`

export const PlaningReadingItem = styled.h1`
font-family: "Montserrat";
font-size: 19px;
font-weight: 600;
line-height: 38px;
text-align: left;
color: #242A37;


`




export const ListStar = styled.ul`
list-style: none;
display: flex;
gap: 5px;
@media only screen and (max-width: 320px) {
 margin: 0;
 padding:0;
}


`


export const ItemStar = styled.li`
  


`


export const ResumeBTN = styled.button`

width: 130px;
height: 40px;
background: #6D7A8D;
box-shadow: 0px 2px 4px 0px #00000040;
font-family: "Montserrat";
font-size: 1opx;
font-weight: 500;
line-height: 24px;
color: #FFFFFF;
text-align: center;
border: none;


`

export const BooksList = styled.ul`
list-style: none;
display: flex;
flex-direction: column;
gap: 15px;
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
position: relative;
display: flex;
flex-direction: column;
width: 100%;
gap: 5px;
background: #FFF;
box-shadow: 0px 2px 3px 0px rgba(9, 30, 63, 0.10);
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

export const MobileResumeBox = styled.div`
display: flex;
flex-direction: column;
`

export const ModallAddBtn = styled.button`
position: absolute;
bottom: -1.25%;
left: 40%;
display: flex;
    width: 52px;
    height: 52px;
    background: #FF6B08;
    border: none;
    border-radius: 50%;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 500;
    line-height: 38px;
    text-align: center;
    color: #FFF;
    justify-content: center;
    align-items: center;
`;