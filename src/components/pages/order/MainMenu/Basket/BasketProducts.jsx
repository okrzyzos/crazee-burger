import React, { useContext } from "react";
import BasketCard from "./BasketCard";
import { IMAGE_COMING_SOON } from "../../../../../enums/product";
import { RiDeleteBin2Fill } from "react-icons/ri";
import styled from "styled-components";
import { checkIfProductIsClicked } from "../MainRightSide/Menu/helper";
import OrderContext from "../../../../../context/OrderContext";
import { findObjectById } from "../../../../../utils/array";

export default function BasketProducts() {
  const { menuData, isAdminMode, handleDeleteBasket, basket,handleProductSelected,productSelected,username } =
    useContext(OrderContext);


  
  const handleOnDelete = (event, id) => {
    event.stopPropagation();
    handleDeleteBasket(id,username);
  };

  return (
    <div>
      {basket.map((menu) => {
        const menuProduct = findObjectById(menu.id, menuData);
        return (
          <BasketCard
            key={menu.id}
            imageSource={
              menuProduct.imageSource
                ? menuProduct.imageSource
                : IMAGE_COMING_SOON
            }
            {...menuProduct}
            isClickable={isAdminMode}
            quantity={menu.quantity}
            onClick={isAdminMode ? () => handleProductSelected(menu.id) : null}
            isSelected={checkIfProductIsClicked(menu.id, productSelected.id)}
          >
            <DeleteIcon onClick={(event) => handleOnDelete(event, menu.id)} />
          </BasketCard>
        );
      })}
    </div>
  );
}

const DeleteIcon = styled(RiDeleteBin2Fill)`
  color: red;
  cursor: pointer;
  font-size: 20px;
  transition: color 0.3s;

  &:hover {
    color: red;
    cursor: pointer;
  }
`;
