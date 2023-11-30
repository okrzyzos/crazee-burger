import React from "react";
import styled from "styled-components";
import theme from '../../../theme/index';



function ButtonPrimary({ label, Icon  }) {
  return (
      <PrimaryBut>
        <span>{label}</span>
        {Icon && Icon}
      </PrimaryBut>
  );
}

const PrimaryBut = styled.button`
  padding: 15px;
  background-color: orange; // Utilisez la couleur correspondant à votre design
  color: ${theme.colors.white};
  border: none;
  border-radius: ${theme.borderRadius.round};
  cursor: pointer;
  width: 400px;
  display:flex;
  align-items: center;
  height: 70px;
  margin-left: 25px;
  justify-content: center;


`;

export default ButtonPrimary;
