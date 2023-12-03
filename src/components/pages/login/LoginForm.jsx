import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../reusable-ui/Logo";
import theme from "../../../theme/index";

import backgroundImg from "../../../assets/F03-burger-background.jpg";
import { FaUserCircle } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";

import { GoChevronRight } from "react-icons/go";
import TextInput from "../reusable-ui/TextInput";
import PrimaryButton from "../reusable-ui/PrimaryButton";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

function LoginForm() {
  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (firstName) {
      navigate(`/order-page/${firstName}`);
      setFirstName("");
      toast.success("connexion réussie");
    }
  };

  return (
    <>
      <LoginContainer>
        <Logo />

        <Title>Bienvenue chez nous !</Title>
        <LineStyled></LineStyled>
        <LoginFormStyled action="submit" onSubmit={handleSubmit}>
          <Subtitle>Connectez-vous</Subtitle>

          <InputWithIcon>
            <TextInput
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Entrez votre prénom"
              required
              Icon={<FaUserCircle className="icon" />}
            />
          </InputWithIcon>
          <PrimaryButton
            label="acceder a mon espace "
            Icon={<GoChevronRight className="icon" />}
            className="button"
          />
        </LoginFormStyled>
       
      </LoginContainer>
    </>
  );
}

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
  max-width: 500px;
  min-width: 500px;
  width: 100%; // Make the form take the full width of its parent

  .button {
    width: 400px;
    height: 70px;
    margin-left: 25px;
  }
  .icon {
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Title = styled.h1`
  color: ${theme.colors.white};
  margin-bottom: 0.5em;
  font-family: "Amatic SC", sans-serif;
  font-size: ${theme.fonts.size.P6};
  font-weight: ${theme.fonts.weights.bold};
`;

const Subtitle = styled.h3`
  color: ${theme.colors.white};
  margin-bottom: 25px;
  font-family: "Amatic SC", sans-serif;
  font-size: ${theme.fonts.size.P4};
`;

const LoginContainer = styled.div`
  height: 100vh;
  background-image: url(${backgroundImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; /* Ne pas répéter l'image */
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: overlay;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
`;
const LineStyled = styled.div`
  border: 1px solid ${theme.colors.primary};
  width: 350px;
  margin-bottom: 50px;
`;
const InputWithIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: ${theme.borderRadius.round};
  padding: 10px;
  padding-left: 35px;
  margin: 15px;

  input {
    flex: 1; // Prend toute la largeur disponible
    border: none;
    margin-left: 45px; // Espace entre l'icône et l'input

    &:focus {
      outline: none;
    }
  }

  svg {
    position: absolute; // Positionnez l'icône absolument par rapport à son parent
    margin-left: 20px; // Espace entre l'icône et le texte à l'intérieur de l'input
    font-size: 20px; // Taille de l'icône
    color: ${theme.colors.greyMedium};
  }
`;
const PrimaryButtonStyled = styled.button`
  width: 100%; // Ensure the button takes the full width of its container
  // ... other styles ...
`;

export default LoginForm;
