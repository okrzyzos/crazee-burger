import React from 'react'
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";


function CustomModal({onClose}) {

    const navigate = useNavigate();

    const handleButtonClick = () => {
        // Close the modal
        onClose();
    
        // Navigate to the "/accueil" page
        navigate("/");
      };
  return (
    <CustomModalStyled className="custom-modal">
    <div className="modal-content">
      <h2>Session expirée</h2>
      <p>Votre session a expiré. Veuillez vous reconnecter.</p>
      <button className='button' onClick={handleButtonClick}>Fermer</button>
    </div>
  </CustomModalStyled>
  )
}


const CustomModalStyled = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  background: rgba(255, 255, 255, 0.8); /* Semi-transparent white background */
  backdrop-filter: blur(5px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
 
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 300px;
  border-radius: 10px;
  color: white;

  .modal-content {
    width: 100%;
    height: 100%;
    background-color: grey;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h2 {
    margin-bottom: 10px;
  }

  .button {
    border-radius: 10px;
    padding: 10px;
    border: none;
    margin-top: 20px;
    cursor: pointer;
    background-color: white;
    color: grey;
    &:hover {
        color:white;
        background-color:grey;
        border:1px solid white;
    }
  }
`;



export default CustomModal