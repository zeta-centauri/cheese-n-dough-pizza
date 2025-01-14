import filledStarImg from "/assets/img/svg/star.svg";
import emptyStarImg from "/assets/img/svg/star_disabled.svg";
import halfStarImg from "/assets/img/svg/star_half.svg";

import styled from "styled-components";
import { getRatingStars } from "../utils";

interface IRatingProps {
  rating?: number;
}

const Rating = ({ rating }: IRatingProps) => {
  return (
    <Wrapper>
      {rating &&
        getRatingStars(rating).map((value, index) => {
          switch (value) {
            case "full":
              return <Star key={index} src={filledStarImg} alt="star" />;
            case "half":
              return <Star key={index} src={halfStarImg} alt="half" />;
            case "empty":
              return <Star key={index} src={emptyStarImg} alt="empty" />;
          }
        })}
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  gap: 8px;
`;

export const Star = styled.img`
  width: 14px;
  height: 15px;
`;

export default Rating;
