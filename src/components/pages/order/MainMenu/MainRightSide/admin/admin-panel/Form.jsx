import React from "react";
import styled from "styled-components";
import TextInput from "../../../../../reusable-ui/TextInput";
import ImagePreview from "./ImagePreview";
import { getInputTextsConfig } from "./inputTextConfig";
import PrimaryButton from "../../../../../reusable-ui/PrimaryButton";

const Form = React.forwardRef(
  ({ product, onSubmit, onChange, children, handleEdit }, ref) => {
    // state (vide)

    // comportements (vide)

    const inputTexts = getInputTextsConfig(product);

    // affichage
    return (
      <FormStyled onSubmit={onSubmit}>
        <ImagePreview
        className="image"
          imageSource={product.imageSource}
          title={product.title}
          marginTop="55px"
        />
        <div className="input-fields">
          {inputTexts.map((input) => (
            <TextInput
              {...input}
              key={input.id}
              onChange={onChange}
              version="minimalist"
              ref={ref && input.name === "title" ? ref : null}
            />
          ))}
         
        </div>
        {/* <PrimaryButton
            label="Valider la modification"
            className="button"
            onClick={() => handleEdit(product)}
          /> */}
        <div className="form-footer">{children}</div>
      </FormStyled>
    );
  }
);

export default Form;

const FormStyled = styled.form`
  /* border: 2px solid black; */
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  height: 100%;
  width: 70%;
  grid-column-gap: 40px;
  grid-row-gap: 8px;

  .input-fields {
    /* background: blue; */
    grid-area: 1 / 2 / -2 / 3;
    margin-top: 20px;
    display: grid;
    grid-row-gap: 8px;
    margin-left: 30px;
  }

  .form-footer {
    /* background: green; */
    grid-area: 4 / -2 / -1 / -1;
    display: flex;
    margin-left: 30px;
    align-items: center;
    position: relative;
    top: 3px;
  }

  .image {
    height: 200px; /* Adjusted height */
    width: 230px;
  }

  .button {
   width: 300px;
  }
`;
