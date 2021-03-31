import styled from 'styled-components';

export const Nav = styled.nav`
    display: flex;
    justify-content: start;
    align-items: center;
    background-color: blueviolet;
    padding: 0 10px;
    color:  white;
`;

export const NavMenu = styled.ul`
    display: flex;
    list-style: none;
    gap: 26px;
    text-transform: uppercase;
    a {
        text-decoration : none;
        color:  white;
        font-weight: bold;
    }
`;

export const Title = styled.h1`
    display:flex;
    gap: 10px;
    align-items: center;
`