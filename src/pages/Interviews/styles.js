import styled  from 'styled-components';
import { colorSecondary } from '../../ui/ui-colors';

export const InterviewsContainer = styled.div`
    display:flex;
    width: 70%;
    height: 100%;
    margin:20px auto;
    overflow-y: auto;
    overflow-x: auto;
    position: relative;
`

export const InterviewsTable = styled.table`
    width: 100%;
    height: 100%;
    border-collapse: collapse;
    background-color: #fff;
`

export const InterviewsTHead = styled.thead`
    background-color: ${colorSecondary};
    color: #fff;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
`

export const StyledTH = styled.th`
    background-color: ${colorSecondary};
    color: #fff;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
`

export const StyledTD = styled.td`
adding: 13px 10px;
text-align: center;
font-size: 13px;
`

export const Icon = styled.a`
    color : #000;
    text-decoration: none;
`;