// import { useSelector } from "react-redux";
// import { selectIsLoggedIn } from "redux/auth/selectors";
import { Outlet } from "react-router-dom";
// import { Register } from "./Authentication/Register";
import { Training } from "./Training/Training";
import {BookForm} from './AddBook/BookForm'
import {BookList} from './AddBook/BookList'
// import { Statistics } from "./Statistics/Statistics";
// import { Login } from "./Authentication/Login";
import { UserMenu } from "./Authentication/UserMenu";
import { Header } from "./Header/Header";
import { fetchBooksSelected } from "../redux/training/operation";
import { useDispatch } from "react-redux";
import { useEffect } from "react";



export const App = ()=> {
  
  const dispatch = useDispatch();
  const userId = localStorage.getItem('id');
 

  return (
    <>
       <Header/>

      <Outlet/> 
           
{/*    
     {isLoggedIn ? <UserMenu/> :  <AuthMenu/> } */}
     {/* <h1>My Bookshelf</h1> */}
      {/* <BookForm />
      <BookList /> */}
      {/* <Register /> */}
      {/* <Login/> */}
      {/* <Training /> */}
      {/* <Statistics /> */}
      
    </>
  );
};