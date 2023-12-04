import React from "react";
import CardProduct from "../../reusable-ui/CardProduct";
import styled from "styled-components";
import { formatPrice } from "../../../../utils/maths";

function MenuProduct({ menu }) {
  return (
    <ProductStyled>
      {menu.map(({ id, title, imageSource, price }, index) => (
        <CardProduct
          key={`${id}-${index}`}
          title={title}
          imageSource={imageSource}
          leftDescription={formatPrice(price)}
        />
      ))}
    </ProductStyled>
  );
}
const ProductStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); // Creates 4 columns of equal width
  gap: 20px; // Adjust the space between the cards
  padding: 50px 50px 150px; // Adds some padding around the grid
  overflow-y: scroll;

  justify-items: center;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr); // For smaller screens, 3 columns
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(
      2,
      1fr
    ); // For even smaller screens, 2 columns
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr; // On very small screens, 1 column
  }
`;

export default MenuProduct;
