import { selectSelectedBooks, selectTrainingId} from "../../../redux/training/selectors";
import {useDispatch, useSelector } from "react-redux";
import { markAsCompleted } from "../../../redux/training/operation";
import {Thead,Container, Th, Tr, Table, Tbody} from '../style/booksList.styled'

export const BooksList = () => {
    const selectedBooks = useSelector(selectSelectedBooks);
    const trId = useSelector(selectTrainingId);
    const dispatch = useDispatch()
    
    const handleChekboxChange = (bookId) => {
      dispatch(markAsCompleted({bookId, trId}))
    }


    return <Container> <Table>
        <Thead>
            <tr>
              <Th>Назва книги</Th>
              <Th>Автор</Th>
              <Th>Рік</Th>
              <Th>Стор.</Th>
            </tr>
          </Thead>
      <Tbody>
        <div></div>
        {selectedBooks.map((book) => (
          <Tr key={book.id}> 
            <td><input type="checkbox" name={book.title} id={book.id} checked={book.status === 'completed'} onChange={()=>handleChekboxChange(book.id)}/> {book.title}</td>
            <td>{book.author}</td>
            <td>{book.year}</td>
            <td>{book.pages}</td>
          </Tr>
        ))}
      </Tbody>
    </Table>
    </Container>
}