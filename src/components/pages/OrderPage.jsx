import React from "react";
import { useNavigate  ,useParams} from "react-router-dom";
import styled from "styled-components";


function OrderPage() {
  const {firstName} = useParams();
  const navigate = useNavigate();
  return (
    <OrderPageStyled>
      {firstName && <h1>Bonjour {firstName}</h1>}
      <br />
      <button onClick={() => navigate("/")}>
        Retourner vers la page d'accueil
      </button>
    </OrderPageStyled>
  );
}


const OrderPageStyled = styled.div`

position: absolute; 
top: 0;
left: 0;
margin: 0;
padding: 20px; 

h1 {
  color: coral;
}

`

export default OrderPage;
