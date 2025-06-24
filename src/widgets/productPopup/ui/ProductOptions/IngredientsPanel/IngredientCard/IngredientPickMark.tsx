import styled from 'styled-components';
import markImg from 'assets/img/svg/mark-icon.svg';

interface IngredientPickMarkProps {
    show: boolean;
}

const IngredientPickMark = ({ show }: IngredientPickMarkProps) => {
    if (!show) return null;
    return <Image src={markImg} />;
};

const Image = styled.img`
    position: absolute;
    height: 18px;
    width: 18px;
    top: 7px;
    right: 7px;
`;

export default IngredientPickMark;
