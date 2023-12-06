import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import theme from "../../../../theme/index";
import MenuProduct from "./MenuProduct";
import { fakeMenu1, fakeMenu2 } from "../../../../api/Data";
import Admin from "./admin/Admin";
import { toast } from "react-toastify";
import OrderContext from "../../../../context/OrderContext";
import PrimaryButton from "../../reusable-ui/PrimaryButton";

function Main() {
  // const [menuData, setMenuData] = useState([]);
  const { isAdminMode, setAdminMode, menuData,setMenuData } = useContext(OrderContext);
  const [menuEmptiedInAdmin, setMenuEmptiedInAdmin] = useState(false);
  const isMenuEmpty = menuData.length === 0;

  useEffect(() => {
    // Simulate fetching data with a timeout
    const fetchData = () => {
      // Simulating an API call with a delay
      setTimeout(() => {
        // Combine your fake menu data
        const combinedMenu = [...fakeMenu1, ...fakeMenu2];
        setMenuData(combinedMenu);
      }, 500); // Delay in milliseconds
    };

    fetchData();
  }, []);

  

  const regenerateDefaultProducts = () => {
    const combinedMenu = [...fakeMenu1, ...fakeMenu2];
    setMenuData(combinedMenu);
    toast.success("Produits régénérés avec succès !");
  };

 

  const deleteProductFromMenu = (productId) => {
    const updatedMenu = menuData.filter((item) => item.id !== productId);
    setMenuData(updatedMenu);
    toast.success("Suppression avec succès !");

    // Si après suppression, le menu est vide et nous sommes en mode Admin
    if (updatedMenu.length === 0 && isAdminMode) {
      setMenuEmptiedInAdmin(true);

    }
  };

 

  return (
    <MainStyled className="main">
      <div className="basket"></div>
      <div className="menu-admin">
        <div className="regenerate">
          {isMenuEmpty && !isAdminMode && menuEmptiedInAdmin && (
            <>
              <p>Victime de son succès :D!</p><br/>
              <p>De nouvelles recettes sont en cours de préparation!</p><br/>
              <p>A très vite !</p>
            </>
          )}
          {isMenuEmpty && isAdminMode && (
            <div className="regenerate-container">
              <h2>LE MENU EST VIDE ?</h2>
              <br />
              <h4>CLIQUEZ CI-DESSOUS POUR LE REINITIALISER</h4>
              <br />
              <br />
              <PrimaryButton
                label="Générer de nouveaux produits"
                className="button"
                onClick={regenerateDefaultProducts}
              ></PrimaryButton>
            </div>
          )}
        </div>
        <MenuProduct
          menu={menuData}
          onDeleteProduct={deleteProductFromMenu}
          isAdmin={isAdminMode}
        />

        {isAdminMode && <Admin  />}
      </div>
    </MainStyled>
  );
}
const MainStyled = styled.div`
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  overflow-y: auto;
  flex: 1;
  display: grid;
  // grid-template-columns: 25% 1fr;
  grid-template-columns: 1fr;
  // .basket {
  //   background-color: pink;
  // }

  

    .button {
      width: 400px;
      cursor: pointer;
    }
    h2 {
      font-family: Amatic SC;
      font-size: 36px;
      font-weight: 700;
      line-height: 45px;
      letter-spacing: 0em;
      text-align: center;
      color: #747b91;
    }
    h4 {
      font-family: Amatic SC;
      font-size: 36px;
      font-weight: 400;
      line-height: 45px;
      letter-spacing: 0em;
      text-align: center;
      color: #747b91;
    }
  }

  .menu-admin {
    position: relative;
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    overflow-y: hidden;
    display: grid;

    .regenerate-container {
      // Pas besoin de spécifier flex-direction ou justify-content si c'est le même que .regenerate
      padding: 20px; // Ajoutez du padding autour du conteneur si nécessaire
      text-align: center;
     
    }
    .regenerate {
      width:100%;
      p{
        font-family: Amatic SC;
      font-size: 36px;
      font-weight: 400;
      line-height: 45px;
      letter-spacing: 0em;
      text-align: center;
      color: #747b91;
      }
    }
  }
`;

export default Main;
