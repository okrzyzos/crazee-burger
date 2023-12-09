import React from "react";
import { FaUserCircle } from "react-icons/fa";
import styled from "styled-components";
import { useNavigate , useParams} from "react-router-dom";
import theme from "../../../../theme";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

function Profil() {
  const navigate = useNavigate();
  const { username } = useParams();


  const handleDeconnexion = () => {
    // Afficher le toast avant la redirection
    toast.success("Déconnexion réussie");

    // Logique de déconnexion (effacer le token, nettoyer l'état, etc.)

    // Rediriger vers la page d'accueil ou de connexion
    navigate("/");
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  return (
    <ProfilStyled className="profil">
      <div>
        {username && (
          <>
            <p className="text-profil">
              Hey,{" "}
              <span className="color-text-user">
                {capitalizeFirstLetter(username)}
              </span>
            </p>
          </>
        )}
        <br />

        <span className="deconnection" onClick={handleDeconnexion}>
          {" "}
          Se déconnecter
        </span>
      </div>

      <div className="picture">
        <FaUserCircle size={50} />
      </div>
    </ProfilStyled>
  );
}

const ProfilStyled = styled.div`
  align-items: center;
  font-size: 10px;
  display: flex;

  .text-profil {
    font-size: 25px;
  }

  svg {
    margin-left: 5px; // Espace entre l'icône et le texte à l'intérieur de l'input

    color: ${theme.colors.greyMedium};
  }

  .deconnection {
    font-size: 15px;
  }

  .color-text-user {
    color: #ffa01b;
  }

  span:hover {
    text-decoration:underline;
  }
`;

export default Profil;
