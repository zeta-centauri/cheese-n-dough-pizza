import styled from 'styled-components';
import { colors } from '../../../../../../styles/colors';

export const Wrapper = styled.div`
    padding: 12px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Price = styled.p`
    font-weight: 700;
    font-size: 16px;
`;

export const Buttons = styled.div`
    display: flex;
    gap: 16px;
`;

export const EditButton = styled.button`
    font-weight: 400;
    font-size: 14px;
    color: ${colors.primary};
`;
