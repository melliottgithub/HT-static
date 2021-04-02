import styled from 'styled-components';
import { colorSecondary, colorWhite } from '../../../ui/ui-colors';

export const LoginWrapper = styled.div`
    width: 600px;
    margin: 0 auto;
    display:flex;
    flex-direction: column;
`;

export const Alert = styled.div`
    color: ${colorWhite}; 
    background-color: ${colorSecondary};
    text-align: center;
`;