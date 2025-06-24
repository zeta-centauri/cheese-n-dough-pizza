import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const Button = styled.button<{ $isCategoriesButton: boolean }>`
    width: auto;
    margin-left: 40px;
    min-width: 121px;
    padding: 12px 20px;

    position: ${(props) => (props.$isCategoriesButton ? 'static' : 'fixed')};
    right: 38px;
    bottom: 38px;

    display: ${(props) => (props.$isCategoriesButton ? 'flex' : 'none')};
    align-items: center;
    justify-content: space-between;
    gap: 8px;

    background-color: ${colors.primary};
    color: ${colors.fontWhite};
    font-weight: 700;
    border-radius: 50px;

    &:hover {
        background-color: #e46f15;
    }
    .divider {
        height: 21px;
        width: 2px;
        background-color: #e06b14;
    }
    @media (width <= 650px) {
        display: ${(props) => (props.$isCategoriesButton ? 'none' : 'flex')};
    }
`;

export const ButtonCounter = styled.p`
    flex: 1;
    text-wrap: nowrap;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;
