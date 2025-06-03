import styled from 'styled-components';
import { CloseButton } from '../../components/Buttons/CloseButton/CloseButton';


export const ProductWrapper = styled.div`
    height: 605px;
    padding: 27px 0;

    position: relative;

    display: flex;
    align-items: center;
    gap: 10px;

    background-color: #fdfdfd;
    border-radius: 14px;

    @media (width <= 1000px) {
        width: 70%;
        height: auto;
        max-height: 90%;

        flex-direction: column;
        align-items: stretch;

        overflow-y: scroll;
        overflow-x: hidden;
    }

    @media (width < 650px) {
        width: 100vw;
        height: 100vh;
        max-height: 100vh;
    }
`;

export const ProductCloseButton = styled(CloseButton)`
    position: absolute;
    top: 0;
    right: -40px;

    display: flex;
`;
