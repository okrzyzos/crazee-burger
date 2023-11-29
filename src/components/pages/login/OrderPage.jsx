import React from "react";
import { useNavigate  ,useLocation} from "react-router-dom";

function OrderPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { firstName } = location.state || {};
  return (
    <div>
      {firstName && <h1>Bonjour {firstName}</h1>}
      <br />
      <button onClick={() => navigate("/")}>
        Retourner vers la page d'accueil
      </button>
    </div>
  );
}

export default OrderPage;
