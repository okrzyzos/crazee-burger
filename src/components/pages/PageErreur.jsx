import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";


function PageErreur() {
    const navigate = useNavigate();
  return (
    <PageErreurStyled>
    <h1><strong>ERROR PAGE...</strong></h1>
    <button onClick={() => navigate('/')}>Retourner vers la page d'accueil</button>
  </PageErreurStyled>
  )
}

const PageErreurStyled = styled.div`

position: absolute; 
top: 0;
left: 0;
margin: 0;
padding: 20px; 

h1 {
  color: coral;
}

`

export default PageErreur