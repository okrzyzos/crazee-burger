import React, { useContext } from "react";
import OrderContext from "../../../../../../../context/OrderContext";
import {EMPTY_PR0DUCT} from "../../../../../../../enums/product";
import { replaceFrenchCommaWithDot } from "../../../../../../../utils/maths";
import SubmitButton from "./SubmitButton";
import styled from "styled-components";

import Form from "./Form";

export default function AddForm() {
  // state
  const { username, handleAdd, newProduct, setNewProduct } =
    useContext(OrderContext);

  // comportements
  const handleSubmit = (event) => {
    event.preventDefault();
    const newProductToAdd = {
      ...newProduct,
      id: crypto.randomUUID(),
      price: replaceFrenchCommaWithDot(newProduct.price),
    };
    handleAdd(newProductToAdd, username);
    setNewProduct(EMPTY_PR0DUCT);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewProduct({ ...newProduct, [name]: value });
  };
 
  // affichage
  return (
    <Form product={newProduct} onSubmit={handleSubmit} onChange={handleChange}>
      <SubmitButton />


    </Form>
  );
}

