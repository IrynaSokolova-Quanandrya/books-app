import styled from "styled-components";

export const HeaderElement = styled.header`
    height: 60px;
    box-shadow: 0px 2px 3px 0px rgba(9, 30, 63, 0.1);
    display: flex;
    align-items: center;
    justify-content: space-between; /* Вирівнюємо елементи по краях */
    padding: 0 20px; /* Додано зазначення відступів з обох боків */
`;

export const HeaderNav = styled.nav`
    display: flex;
    align-items: center; /* Вирівнюємо елементи по вертикалі */
    list-style: none;
    margin: 0; /* Забираємо зовнішні відступи для навігаційного списку */
    padding: 0; /* Забираємо внутрішні відступи для навігаційного списку */
`;

export const Logo = styled.img`
    margin-right: 20px; /* Додаємо правий відступ для логотипу */
`;

export const UserName = styled.p`
    margin: 0; /* Забираємо зовнішні відступи для імені користувача */
`;

export const NavItem = styled.li`
    margin-right: 15px;
    &:last-child {
        margin-right: 0; /* Видаляємо правий відступ для останнього елементу */
    }
`;

export const ButtonLogo = styled.button`
    width: 33px;
    height: 33px;
    border-radius: 50px;
    background: #F5F7FA;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 600;
    color: #242A37;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    outline: none;
    padding: 0; /* Видаляємо внутрішні відступи */
    margin-right: 5px; /* Додаємо відстань праворуч */
`;
export const UserContainer = styled.div`
    display: flex;
    align-items: center;
`;