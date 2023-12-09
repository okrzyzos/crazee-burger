import React, { useState, useContext } from "react";
import styled, { css } from "styled-components";
import { toast } from "react-toastify";
import { FaHamburger } from "react-icons/fa";
import { MdPhotoCamera } from "react-icons/md";
import { MdOutlineEuroSymbol } from "react-icons/md";
import OrderContext from "../../../../../../../context/OrderContext";
import theme from "../../../../../../../theme";
import ImagePreview from "./ImagePreview";

const AddProductContainer = styled.div`
  grid-template-columns: 20% 20% 20% 20% 20%;
  gap: 10px; // Ajoute un espace entre les colonnes
  display: grid;
  padding: 5px;
  // grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 20px;
  margin-left: 7px;
  margin-top: 20px;
  width: 100%;

`;

const ImagePreviewContainer = styled.div`
  height: 200px; /* Adjusted height */
  width: 230px;


`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  background: #f5f5f7;
  border-radius: 5px;
  width: 425px;
  height: 40px;
  outline: none;
`;

const Icon = styled.span`
  color: ${theme.colors.greyBlue};

  margin-left: 25px;
`;

const Input = styled.input`
  border: none;
  background: transparent;
  width: 100%;
  outline: none;
  padding: 10px;

  &::placeholder {
    color: ${theme.colors.greyMedium};
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px; // Ajoute un espace entre les champs du formulaire
  margin-left:70px;
`;

const Button = styled.button`
  padding: 15px;
  border-radius: 5px;
  cursor: pointer;
  background-color: #82cb73;
  color: white;
  border: none;
  margin-bottom: 10px;
  font-size:15px;
  width: 300px;
`;

function AddProductForm() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const imgDefault = "/images/coming-soon.png";

  const [imageSource, setImageSource] = useState("");
  const { addProductToMenu } = useContext(OrderContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProduct = { title, price, imageSource }; // Créez l'objet produit ici
    addProductToMenu(newProduct); // Utilisez la fonction passée en prop
    toast.success("Ajouté avec succès !");
    setTitle("");
    setPrice("");
    setImageSource("");
  };

  return (
    <AddProductContainer>
      <ImagePreviewContainer>
        <ImagePreview
          imageSource={imageSource}
          title={title}
          className="image"
          marginTop="0"
         
        />
      </ImagePreviewContainer>

      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Icon>
            <FaHamburger />
          </Icon>
          <Input
            type="text"
            placeholder="Nom du produit (ex: Super Burger)"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <Icon>
            <MdPhotoCamera />
          </Icon>
          <Input
            type="text"
            placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
            value={imageSource}
            onChange={(e) => setImageSource(e.target.value)}
          />
        </InputGroup>
        <InputGroup>
          <Icon>
            <MdOutlineEuroSymbol />
          </Icon>
          <Input
            type="text"
            placeholder="Prix"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </InputGroup>
        <Button type="submit">Ajouter un nouveau produit au menu</Button>
      </Form>
    </AddProductContainer>
  );
}

export default AddProductForm;
