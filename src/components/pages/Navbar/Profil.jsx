import React from "react";
import { FaUserCircle } from "react-icons/fa";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import theme from "../../../theme/index";

function Profil({ username }) {
  const navigate = useNavigate();

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

        <span className="deconnection" onClick={() => navigate("/")}>
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
`;

export default Profil;
