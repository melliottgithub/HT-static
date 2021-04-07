import styled from 'styled-components';
import { colorSecondary, colorWhite } from '../../../ui/ui-colors';

export const LoginWrapper = styled.div`
  width: 97%;
  margin: 0 6px;
  display: flex;
  flex-direction: column;
  @media (min-width: 760px) {
    width: 600px;
    margin: 0 auto;
  }
`;

export const Alert = styled.div`
  color: ${colorWhite};
  background-color: ${colorSecondary};
  text-align: center;
`;
