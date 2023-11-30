import React from "react";
import styled from "styled-components";
import theme from '../../../theme/index';


function TextInput({ value, onChange, Icon, ...extraProps }) {
  return (
    <TextInputStyled>
      {Icon && Icon}

      <input type="text" onChange={onChange} value={value} {...extraProps} />
    </TextInputStyled>
  );
}

const TextInputStyled = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 24px;
  margin:10px;
  height:70px;
  width: 400px;
  border-radius:7px;
  background:${theme.colors.white}; // ou toute autre couleur de fond que vous voulez pour l'input


  .icon{
    margin-left:${theme.borderRadius.round};
  }
`;
export default TextInput;
