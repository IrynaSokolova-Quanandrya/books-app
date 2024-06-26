import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { CloseButton } from "react-toastify"
import { logout } from "../../redux/auth/operation"


export const UserMenu = ()=>{

    const dispatch = useDispatch()
    const handleLogOut = ()=>{
        dispatch(logout())
    }
    return(
        <>
          <h1>UserMenu</h1>
        <NavLink to='/'><button onClick={handleLogOut}>Log Out</button> </NavLink> 
        
        </>
      
    )
}