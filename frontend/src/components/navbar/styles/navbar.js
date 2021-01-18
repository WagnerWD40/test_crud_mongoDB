import styled from 'styled-components/macro';
import { COLORS } from '../../../styles/colors';

export const Container = styled.nav`
    background-color: ${COLORS.primary};
    height: 5.6rem;
    width: 100%;
    position: absolute;
    top: 0;
    box-shadow: 4px 4px 8px 8px #00000022;

    ul {
        margin: 0;
        padding: 0 4rem;
        list-style: none;
        display: flex;
        justify-content: space-between;
        align-items: center;   
        height: 100%;
    }
`;

export const Title = styled.li`
    font-size: 4rem;
    color: #FFF;
    font-weight: 600;
`;

export const Actions = styled.li`

`;

export const Action = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;

    svg {
        width: 4rem;
        height: 4rem;
        fill: #FFF;
        transition: fill .2s ease-in-out;
    }

    &:hover svg {
        fill: ${COLORS.highlight};    
    }
`;
