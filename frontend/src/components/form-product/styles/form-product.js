import styled, { css } from 'styled-components/macro';
import { COLORS } from '../../../styles/colors';

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #222222cc;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    background-color: #fff;
    width: 60%;
    height: 80%;
    border-radius: 1rem;
    box-shadow: 4px 4px 16px 8px #33333344;
    padding: 3.2rem;

    form {
        display: flex;
        height: 100%;
        width: 100%;
        font-size: 1.6rem;
    }

    fieldset {
        display: flex;
        width: 100%;
        flex-direction: column;
        border: none;

    }

    legend {
        font-size: 2rem;   
        color: ${COLORS.primary};
        font-weight: 600;
        margin-bottom: 1rem;
    }

    label {
        font-weight: 1.2rem;
        color: #BBB;
        margin-bottom: 1rem;
    }

    input {
        font-size: 1.6rem;
        color: #333333;
        margin-bottom: 1rem;
        border-radius: 4px;
        padding: 4px;
        border-color: #CCC;
    }
`;

export const Row = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
`;

export const ButtonRow = styled(Row)`
    margin: auto auto 0;
    justify-content: space-around;
`;

export const Button = styled.button`
    background-color: ${COLORS.primary};
    color: #FFF;
    border: none;
    width: 30%;
    height: 4rem;
    border-radius: 8px;
    margin-bottom: 10%;
    cursor: pointer;
    font-size: 1.6rem;
    transition: background .2s ease-in-out;

    &:hover {
        background-color: ${COLORS.shadow};
    }

    ${({ cancelButton }) => cancelButton && css`
        background-color: ${COLORS.cancel};

        &:hover {
            background-color: ${COLORS.cancelShadow};
        }
    `};

    &:disabled {
        background-color: ${COLORS.background};
        cursor: not-allowed;
    }

`;