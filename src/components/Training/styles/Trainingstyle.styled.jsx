import styled from "styled-components";

export const MyTrainingDiv = styled.div`
    width: 886px;
    height: 60px;
    background: #B1B5C2;
    margin: 0px 41px 25px 39px;
    text-align: center;

    @media only screen and (max-width: 770px) {
        width: 100%
      }

      @media only screen and (max-width: 320px) {
        margin: 0;
      }
`;
export const MyTrainingText = styled.h1`
    width: 176px;
    height: 38px;
    font-family: Montserrat;
    font-size: 20px;
    font-weight: 600;
    line-height: 38px;
    text-align: center;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    padding: 0px 355px 0px 355px;
    white-space: nowrap;
    @media only screen and (max-width: 770px) {
        padding: 0 251px;
      }
      @media only screen and (max-width: 320px) {
        padding: 0 47px;
      }
`;
export const InputStartDate = styled.input`
    width: 250px;
    height: 42px;
    border: 1px solid #A6ABB9;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 500;
    line-height: 38px;
    text-align: left;
    padding: 0px 10px 0px 10px;
    margin: 25px 46px 25px 170px;
    text-color: #A6ABB9;
    @media only screen and (max-width: 770px) {
        margin: 0;
      }
`;

export const DateDiv = styled.div`
@media only screen and (max-width: 770px) {
    display: flex;
justify-content: center;
align-items: center;
gap: 45px;
  }

  @media only screen and (max-width: 320px) {
    flex-direction: column;
justify-content: center;
align-items: center;
gap: 20px;
  }
`
export const InputFinishDate = styled.input`
    width: 250px;
    height: 42px;
    border: 1px solid #A6ABB9;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 500;
    line-height: 38px;
    text-align: left;
    padding: 0px 10px 0px 10px;
    text-color: #A6ABB9;
`;
export const SelectBook = styled.select`
    width: 590px;
    height: 42px;
    top: 262px;
    left: 39px;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 500;
    line-height: 38px;
    text-align: left;
    padding: 10px 10px 10px 10px;
    margin: 25px 46px 25px 39px;

    @media only screen and (max-width: 770px) {
        width: 482px;
        margin: 0;
      }
       @media only screen and (max-width: 320px) {
        width: 100%;
      }
`;
export const AddButton = styled.button`
display: flex;
    width: 171px;
    height: 42px;
    top: 262px;
    left: 754px;
    background: #F6F7FB;
    border: 1px solid #242A37;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 500;
    line-height: 38px;
    text-align: left;
    padding: 10px 10px 10px 10px;
    margin: 0px 0px 0px 0px;
    justify-content: center;
    align-items: center;
`;

export const ModallAddBtn = styled.button`
position: absolute;
bottom: -1.25%;
left: 43%;
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
export const SelectDiv = styled.div`
    display: flex;
    align-items: center;
    width: 886px;
    
    @media only screen and (max-width: 770px) {
        width: 100%;
        justify-content: center;
        gap: 25px;
        padding-top: 25px;
        padding-bottom: 40px;
      }
      @media only screen and (max-width: 320px) {
        flex-direction: column;
        gap: 35px;
        padding-top: 0px;
        padding-bottom: 0;
      }
`;
export const OptionBook = styled.option`
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 500;
    line-height: 38px;
    text-align: left;
    padding: 10px 0px 10px 10px;
`;

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
max-height: 250px;
overflow: auto;
@media only screen and (max-width: 770px) {
   width: 100%
 }` 
export const Table = styled.table`
    border: 1px solid #E0E5EB;
    border-left: none;
    border-right: none;
    width: 886px;
    height: 233px;
    top: 329px;
    left: 39px;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 500;
    line-height: 38px;
    text-align: left;
    padding: 0px 10px 10px 10px;
    margin: 25px 0px 40px 5px;

    @media only screen and (max-width: 770px) {
        width: 100%;
        padding: 0px;
        margin: 0px;
      }
`;
export const Thead = styled.thead`
position: sticky;
top: 0;
color: #898F9F;
background-color: #F6F7FB;
z-index: 1;
`;

export const Tbody = styled.tbody`
// display: block;
width: 100%;
max-height: 200px;
overflow-y: auto;
overflow-x: hidden;
`
export const Tr = styled.tr`
position: sticky;
top: 0;
font-family: Montserrat;
font-size: 14px;
font-weight: 500;
line-height: 38px;
text-align: left;
color: #242A37;
`;
export const Th = styled.th`
position: sticky;
top: 0;
border-bottom: 1px solid #E0E5EB;`;
export const Img = styled.img`
    padding-right: 10px;
    width: 22px;
    height: 17px;
`;
export const BtnTrain = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 40px;
    top: 602px;
    left: 382px;
    background: #FF6B08;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 600;
    line-height: 38px;
    text-align: center;
    color: white;
    border: 1px solid #FF6B08;
`;
export const DivTrainingDivs = styled.div`
    display: flex;
    gap: 40px;
    width: 100%;
    background: #F6F7FB;
    align-items: center;
    
`;

export const GoalContainer = styled.div`
width: 23%;
height: 100%;
display: flex;
background-color: #FFF;
box-shadow: 0px 2px 3px 0px rgba(9, 30, 63, 0.25);
align-items: start;
flex-direction: column;
@media only screen and (max-width: 770px) {
    width: 100%;
    height: auto;
 }

`

export const BigContainer = styled.div`
width: 100%;
display: flex;
gap: 40px;
align-items: center;
justify-content: center;`

export const MegaContainer = styled.div`
position: relative;
max-width: 100%;
max-height: 100%;
display: flex;
flex-wrap: wrap;
gap: 40px;
align-items: start;
justify-content: center;
margin: 0px 40px;
margin-bottom: 40px;
margin-top: 50px;

@media only screen and (max-width: 320px) {
    margin: 0px 25px;
margin-bottom: 65px;
margin-top: 30px;
 }`

export const MediumContainer = styled.div`
width: 70%;
display: flex;
flex-direction: column;
gap: 45px;
margin-top: 50px
`

export const DivWhatToRead = styled.div`
    display: flex;
    align-items: center;
`;

export const MainCountainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
    justify-content: center;
    width: 70%;
    @media only screen and (max-width: 770px) {
   width: 100%
 }
`

//myGoal

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
        padding: 23px 0px;
        gap: 70px;
        
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
    gap: 20px;
    align-items: center;
justify-content: center;
margin: 55px 0px;
padding: 0px;
@media only screen and (max-width: 770px) {
    flex-direction: row;
    margin: 0px;
    gap: 35px;
    align-items: flex-end;
 }

 @media only screen and (max-width: 320px) {
    width: 100%;
    margin: 55px 0px;
    align-items: center;
    gap: 20px;
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
        padding: 0px;
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
width: 100px;
height: 100px;
@media only screen and (max-width: 770px) {
    width: 100px;
height: 60px;
 }

 @media only screen and (max-width: 320px) {
    width: 100px;
height: 100px;
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
 }`

//  mobile books list 

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
position: relative;
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