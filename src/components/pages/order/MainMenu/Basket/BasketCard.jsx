import React, { useState } from "react";
import styled,{css} from "styled-components";
import { formatPrice } from "../../../../../utils/maths";
import theme from "../../../../../theme";

export default function BasketCard({
  imageSource,
  title,
  price,
  quantity,
  children,
  isClickable,
  onClick,
  isSelected,
}) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <BasketCardStyled
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      isSelected={isSelected}
      isClickable={isClickable}
    >
      <div className="banniere-img">
        <div className="image-container">
          <img
            className="image"
            src={imageSource || "/images/coming-soon.png"}
          />
        </div>
        <div className="content">
          <p className="title">{title}</p>

          <span className="color-price">{formatPrice(price)}</span>
        </div>

        <div className="quantity">x {quantity}</div>
        {isHovered && children}
      </div>
    </BasketCardStyled>
  );
}

const BasketCardStyled = styled.div`

  cursor: ${({ isClickable }) => (isClickable ? "pointer" : " auto")};
  .banniere-img {
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 25px;
    margin: 25px;
    height: 86px;
    cursor: pointer;

    padding: 10px;
    box-shadow: -4px 4px 15px 0px #00000033;
    border-radius: 5px;

    .content {
      display: flex;
      flex-direction: column;
      color: #17161a;
      font-family: Amatic SC;
      font-size: 24px;
      font-weight: 700;

      line-height: 32px;
      text-align: center;
      letter-spacing: 0em;

      .title {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-bottom: 5px;
      }

      .color-price {
        color: #ffa01b;
      }
    }

    .image {
      width: 85px;
      height: 70px;
      margin-top: 10px;
      object-fit: contain; // Ajuste la taille de l'image tout en conservant ses proportions
      border-radius: 5px; // Facultatif : arrondi les coins de l'image
    }

    .quantity {
      color: #ffa01b;
      font-family: Amatic SC;
    }

    ${({ isClickable, isSelected }) => isClickable && isSelected && selectedStyle}
  }
`;

const selectedStyle = css`
  background: ${theme.colors.primary};
  .price,
  .quantity {
    color: ${theme.colors.white};
  }
`;
