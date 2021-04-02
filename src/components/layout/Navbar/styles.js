import styled from 'styled-components';
import { colorPrimary } from '../../../ui/ui-colors';

export const Nav = styled.nav`
    display: flex;
    justify-content: start;
    align-items: center;
    background-color: ${colorPrimary};
    padding: 10px;
    color:  white;
    gap:40px;
`;

export const NavMenu = styled.ul`
    display: flex;
    list-style: none;
    gap: 26px;
    text-transform: uppercase;
    flex:1;
    justify-content: space-between;

    a {
        text-decoration : none;
        color:  white;
        font-weight: bold;
        margin-right: 5px;
    }
`;

export const Title = styled.h1`
    margin-bottom:4px;
    display:flex;
    gap: 6px;
    align-items:center;
    margin-left:10px;
`