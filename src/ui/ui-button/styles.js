import styled from 'styled-components';
import { colorPrimary, colorSecondary } from '../ui-colors';

export const Button = styled.button`
    position: relative;
	appearance: none;
	background: ${colorPrimary};
	padding: 1em 2em;
    color: white;
    padding:10px;
    border:0;
    outline:0;
    cursor:pointer;
    width: ${props => props.width || '100%'};
    margin-right:5px;
    overflow:hidden;

    &::before {
		content: "";
		position: absolute;
		left: ${props => props.x}px;
		top:  ${props => props.y}px;
		width: 0;
		height: 0;
		background: radial-gradient(circle closest-side, ${colorSecondary}, transparent);
		transform: translate(-50%, -50%);
		transition: width 0.2s ease, height 0.2s ease;
	}

	&:hover::before {
        width: 400px;
		height: 400px;
	}
`;

export const StyledButtonLabel = styled.span`
    position: relative;
    pointer-events: none;
`;