import styled from 'styled-components';
import { colorPrimary } from '../ui-colors';

const Button = styled.button`
    background: ${colorPrimary};
    color: white;
    padding:10px;
    border:0;
    outline:0;
    cursor:pointer;
    width: ${props => props.width || '100%'};
    margin-right:5px;
`

export default Button;