import React, { useContext } from "react";
import BasketCard from "./BasketCard";
import { IMAGE_COMING_SOON } from "../../../../../enums/product";
import { RiDeleteBin2Fill } from "react-icons/ri";
import styled from "styled-components";
import { checkIfProductIsClicked } from "../MainRightSide/Menu/helper";
import OrderContext from "../../../../../context/OrderContext";
import { findObjectById } from "../../../../../utils/array";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { basketAnimation } from "../../../../../theme/animations";
import { formatPrice } from "../../../../../utils/maths";
import { isAvailableOptions } from "../../../../../enums/select";
import { convertStringToBoolean } from "../../../../../utils/string";
import Sticker from "../../../reusable-ui/Sticker";

export default function BasketProducts() {
  const {
    menuData,
    isAdminMode,
    handleDeleteBasket,
    basket,
    handleProductSelected,
    productSelected,
    username,
  } = useContext(OrderContext);

  const handleOnDelete = (event, id) => {
    event.stopPropagation();
    handleDeleteBasket(id, username);
  };

  return (
    <TransitionGroup
      component={BasketProductsStyled}
      className={"transition-group"}
    >
      {basket.map((basketProduct) => {
        const menuProduct = findObjectById(basketProduct.id, menuData);
        console.log("menu", menuProduct);

        return (
          <CSSTransition
            appear={true}
            classNames={"animation-basket"}
            key={basketProduct.id}
            timeout={300}
          >
            <div className="card-container">
              {convertStringToBoolean(menuProduct.isPublicised) && (
                <Sticker className="badge-new" />
              )}
              <BasketCard
                {...menuProduct}
                imageSource={
                  menuProduct.imageSource
                    ? menuProduct.imageSource
                    : IMAGE_COMING_SOON
                }
                isClickable={isAdminMode}
                quantity={basketProduct.quantity}
                onClick={
                  isAdminMode
                    ? () => handleProductSelected(basketProduct.id)
                    : null
                }
                isSelected={checkIfProductIsClicked(
                  basketProduct.id,
                  productSelected.id
                )}
                className={"card"}
                price={
                  convertStringToBoolean(menuProduct.isAvailable)
                    ? formatPrice(menuProduct.price)
                    : "non disponible"
                }
              >
                <DeleteIcon
                  onClick={(event) => handleOnDelete(event, basketProduct.id)}
                />
              </BasketCard>
            </div>
          </CSSTransition>
        );
      })}
    </TransitionGroup>
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

const BasketProductsStyled = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow-y: scroll;

  .card-container {
    .badge-new {
      position: absolute;
      z-index: 1;
      margin-top: 15%;
      left: 31%;
      font-size: 12px;
      top: 53px;
      transform: translateX(-155%);
    }
    /* border: 1px solid blue; */
    margin: 10px 16px;
    height: 106px;
    box-sizing: border-box;
    position: relative;
    :first-child {
      margin-top: 20px;
      /* border: 1px solid red; */
    }
    :last-child {
      margin-bottom: 2px;
    }
  }
  ${basketAnimation}
`;
