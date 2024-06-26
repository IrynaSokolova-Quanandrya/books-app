import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser, logout } from "../../redux/auth/operation";
import BookListIcon from './Icon/icon library.svg'
import homeIcon from './Icon/icon home.svg'
import { selectIsStarted } from "../../redux/training/selectors";
import lineHeader from './Icon/Line 4.svg'
import { NavLink } from "react-router-dom";
import { ButtonLogo, HeaderElement, HeaderNav, Logo, NavItem, UserContainer, UserName } from "./Header.styled";
import headerLogo from './Icon/BR.svg'
import { fetchBooksSelected, fetchTrainingOBJ } from "../../redux/training/operation";
export const Header = () => {
    const dispatch = useDispatch();
    const userId = localStorage.getItem('id');
    const user = useSelector(state => state.auth.HeaderUser); // Отримуємо всіх користувачів зі стану
    const isStarted = useSelector(selectIsStarted);
    const [firstLetter, setFirstLetter] = useState('');

    const userName = localStorage.getItem('userName');

    const handleLogOut = () => {
        dispatch(logout())
    }

    
    return (
        <HeaderElement>
            <Logo src={headerLogo} alt="" />
            {userId ? (
                <>
                    <UserContainer>
                        <ButtonLogo>{firstLetter}</ButtonLogo>
                        <UserName>{ userName}</UserName>
                    </UserContainer>
                    <HeaderNav>
                        <NavItem> <NavLink to={isStarted ? '/statistics' : '/training'}><img src={BookListIcon} alt="" /></NavLink></NavItem>
                        <NavItem><NavLink to='/Home'><img src={homeIcon} alt="" /> </NavLink></NavItem>
                        <NavItem><img src={lineHeader} alt="" /></NavItem>
                        <NavItem><NavLink onClick={handleLogOut} to='/'>Вихід</NavLink></NavItem>
                    </HeaderNav>
                </>
            ) : null}
        </HeaderElement>
    )
}