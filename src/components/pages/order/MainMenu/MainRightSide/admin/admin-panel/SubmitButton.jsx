import React from "react";
import Button from "../../../../../reusable-ui/Button";
import styled from "styled-components";

export default function SubmitButton() {
  return (
    <SubmitButtonStyled>
      <Button
        className="submit-button"
        label={"Ajouter un nouveau produit au menu"}
        version="success"
      />
    </SubmitButtonStyled>
  );
}

const SubmitButtonStyled = styled.div`

  .submit-button {
    font-size: 15px;
    padding:10px;
    width:300px;
    margin-left:-30px;
    


  }

 
`;
