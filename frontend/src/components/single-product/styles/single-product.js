import styled from 'styled-components/macro';
import { COLORS } from '../../../styles/colors';

export const Container = styled.tr`
    height: 3.2rem;
    transition: background .2s ease-in-out;

    &:nth-of-type(odd) {
        background-color: #EEE;
    }

    &:nth-of-type(even) {
        background-color: #FFF;
    }

    &:last-of-type td:first-child {
        border-radius: 0 0 0 .6rem;
    }

    &:last-of-type td:last-child {
        border-radius: 0 0 .6rem 0;
    }

    &:hover {
        background-color: ${COLORS.highlight};
    }
`;

export const Cell = styled.td`
    text-align: center;

`;

export const Actions = styled(Cell)`

`;

export const Action = styled.button`
    border: none;
    border-radius: 10rem;
    background-color: transparent;
    cursor: pointer;

    &:not(:last-of-type) {
        margin-right: 1rem;
    }

    svg {
        width: 1.6rem;
        height: 1.6rem;
        fill: #B1B1B1;
        transition: fill .2s ease-in-out;
    }

    &:hover svg{
        fill: #777;
    }
`;
