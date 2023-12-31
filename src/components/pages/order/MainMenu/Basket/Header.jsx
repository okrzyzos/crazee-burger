import React, { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../context/OrderContext";
import { formatPrice } from "../../../../../utils/maths";
import { findObjectById } from "../../../../../utils/array";
import CasinoEffect from "../../../reusable-ui/CasinoEffect";
import { isAvailableOptions } from '../../../../../enums/select';
import { convertStringToBoolean } from '../../../../../utils/string';

function Header() {
  const { basket, menuData } = useContext(OrderContext);

  const calculateSumToPay = () => {
    return basket.reduce((total, basketProduct) => {
      const menuProduct = findObjectById(basketProduct.id, menuData);
      if (isNaN(menuProduct.price)) return total;
      if(convertStringToBoolean(menuProduct.isAvailable) === false) return total
      total += menuProduct.price * basketProduct.quantity;
      return total;
    }, 0);
  };
  return (
    <HeaderStyled>
      <span className="text-total">Total </span>
      <CasinoEffect  count={formatPrice(calculateSumToPay())} />
    </HeaderStyled>
  );
}

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`;

export default Header;
