import React, { useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import { FaHamburger } from "react-icons/fa";
import { MdPhotoCamera } from "react-icons/md";
import { MdOutlineEuroSymbol } from "react-icons/md";
import imgDefault from '../../../../../../public/images/coming-soon.png';

const AddProductContainer = styled.div`
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  gap: 20px; // Ajoute un espace entre les colonnes
  margin-left: 55px;
  align-items: start; // Aligner les éléments au début de chaque colonne
  padding: 20px; // Ajouter un peu de padding autour du contenu
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  background: #f5f5f7;
  border-radius: 5px;
  width: 645px;
  height: 35px;
  padding: 0 12px;
`;

const Icon = styled.span`
  color: #747B91;
  margin-right: 10px;
`;

const Input = styled.input`
  border: none;
  background: transparent;
  color: #A7A8AD;
  width: 100%;

  outline: none;

  &::placeholder {
    color: #A7A8AD;
  }
`;


const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px; // Ajoute un espace entre les champs du formulaire
`;

const ImagePreview = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #E4E5E9;
  height: 120px; // Définir une hauteur fixe pour la prévisualisation de l'image
  width: 215px;

  img{
    width: 100%;
  }
`;



const Button = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  background-color: #82cb73;
  color: white;
  border: none;
  margin-top: 10px;
`;

function AddProductForm({ onAddProduct }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [imageSource, setImageSource] = useState(imgDefault);


  const handleSubmit = (event) => {
    event.preventDefault();
    const newProduct = { title, price, imageSource }; // Créez l'objet produit ici
    onAddProduct(newProduct); // Utilisez la fonction passée en prop 
    toast.success("Ajouté avec succès !");
    setTitle("");
    setPrice("");
    setImageSource(imgDefault);
  };

  return (
    <AddProductContainer>
      <ImagePreview>
        {imageSource ? <img src={imageSource} alt="Prévisualisation" /> : <img src={imgDefault} />}
      </ImagePreview>
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
