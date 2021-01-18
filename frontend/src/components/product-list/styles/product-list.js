import styled from 'styled-components/macro';
import { COLORS } from '../../../styles/colors';

export const Container = styled.table`
    background-color: ${COLORS.primary};
    border-radius: 10px;
    width: 80%;
    margin: 0 auto;
    box-shadow: 4px 4px 16px 8px #00000033;
    border-collapse: separate;
    border-spacing: 0 0;
    font-size: 1.4rem;
`;  

export const Header = styled.tr`
    color: #FFF;
    height: 4rem;
    border-radius: 1rem;
`;