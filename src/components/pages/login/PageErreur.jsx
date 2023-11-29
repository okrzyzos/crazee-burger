import React from 'react'
import { useNavigate } from 'react-router-dom';

function PageErreur() {
    const navigate = useNavigate();
  return (
    <div>
    <h1><strong>ERROR PAGE.</strong></h1>
    <button onClick={() => navigate('/')}>Retourner vers la page d'accueil</button>
  </div>
  )
}

export default PageErreur