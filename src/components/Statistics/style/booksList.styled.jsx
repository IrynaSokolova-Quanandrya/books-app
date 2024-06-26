import styled from 'styled-components'

export const Thead = styled.thead`
position: sticky;
top: 0;
color: #898F9F;
background-color: #F6F7FB;
z-index: 1;
`


export const Tbody = styled.tbody`
// display: block;
width: 100%;
max-height: 200px;
overflow-y: auto;
overflow-x: hidden;
`

export const Td = styled.td`
`

export const Th = styled.th`
position: sticky;
top: 0;
border-bottom: 1px solid #E0E5EB;`

export const Tr = styled.tr`
position: sticky;
top: 0;
font-family: Montserrat;
font-size: 14px;
font-weight: 500;
line-height: 38px;
text-align: left;
color: #242A37;
`

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
    width: 100%;
    @media only screen and (max-width: 770px) {
        margin: 0px;
        padding: 0px;
     }
`

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
max-height: 250px;
overflow: auto;
@media only screen and (max-width: 770px) {
   width: 100%
 }`
 export const BodyContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 200px;
overflow: auto;
width: 100%;
@media only screen and (max-width: 770px) {
   width: 100%
 }`