
import React, { useEffect,useContext,useState } from 'react';
import styled,{css} from "styled-components";
import OrderContext from "../../../../../../context/OrderContext.jsx";
import { formatPrice } from "../../../../../../utils/maths.jsx";
import theme from "../../../../../../theme/index.jsx";
import Card from "../../../../reusable-ui/Card.jsx";
import { checkIfProductIsClicked } from "./helper.jsx";
import { menuAnimation } from "../../../../../../theme/animations"
import { CSSTransition ,TransitionGroup} from "react-transition-group"
import {EMPTY_PR0DUCT, 
  IMAGE_COMING_SOON,
  IMAGE_NO_STOCK,
} from "../../../../../../enums/product.js";
import MenuEmpty from "./MenuEmpty.jsx";
import RibbonAnimated, { ribbonAnimation } from "../Menu/RibbonAnimated.jsx";
import MenuEmptieAdmin from "./MenuEmptieAdmin.jsx";
import { findObjectById } from "../../../../../../utils/array.jsx";
import Loader from "./Loader.jsx";
import { convertStringToBoolean } from "../../../../../../utils/string.js";
import CustomModal from "../../../../reusable-ui/CustomModal.jsx";
import  { setSessionCookie } from "../../../../../../api/user";
import Cookies from 'js-cookie';




export default function MenuProduct() {
  const {
    menuData,
    isAdminMode,
    handleDelete,
    handleDeleteBasket,
    resetMenu,
    productSelected,
    setProductSelected,
    setIsCollapsed,
    username,
    setCurrentTabSelected,
    titleEditRef,
    handleAddToBasket,
    handleProductSelected,
  } = useContext(OrderContext);
  const [showModal,setShowModal] = useState(false);
  const closeModal = () => {
    setShowModal(false);
  };


  useEffect(() => {
    // Check if the session cookie exists
    const userId = Cookies.get('userId');
    if (!userId) {
      // Set the session cookie if it doesn't exist
      setSessionCookie('userId', 'yourUserId'); // Adjust the parameters accordingly
    }
  
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 15 * 60 * 1000); // 3 minutes
  
    return () => clearTimeout(timer);
  }, []);
  
 

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowModal(true);
  //   }, 10000);
  
  //   return () => clearTimeout(timer);
  // }, []);


  // state

  // comportements (gestionnaires d'événement ou "event handlers")
  

  let cardContainerClassName = isAdminMode ? "card-container is-hoverable" : "card-container"



  if (menuData === undefined) return <Loader />;

  // affichage
  if (menuData.length === 0) {
    if (!isAdminMode) return <MenuEmpty />;
    return <MenuEmptieAdmin onReset={() => resetMenu(username)} />;
  }

  const handleCardDelete = (event, idProductToDelete) => {
    event.stopPropagation()
    handleDelete(idProductToDelete, username)
    handleDeleteBasket(idProductToDelete, username)
    idProductToDelete === productSelected.id && setProductSelected(EMPTY_PR0DUCT)
  }

  const handleAddButton = (event, idProductAdd) => {
    event.stopPropagation();

    const productToAdd = findObjectById(idProductAdd, menuData);
    handleAddToBasket(productToAdd, username);
  };

  return (
    <TransitionGroup component={MenuStyled} className="menu">
      {menuData.map(({ id, title, imageSource, price, isAvailable, isPublicised }) => {
        return (
          <CSSTransition classNames={"menu-animation"} key={id} timeout={300}>
            <div className={cardContainerClassName}>
              {convertStringToBoolean(isPublicised) && <RibbonAnimated />}
              <Card
                title={title}
                imageSource={imageSource ? imageSource : IMAGE_COMING_SOON}
                leftDescription={formatPrice(price)}
                hasDeleteButton={isAdminMode}
                onDelete={(event) => handleCardDelete(event, id)}
                onClick={isAdminMode ? () => handleProductSelected(id) : null}
                isHoverable={isAdminMode}
                isSelected={checkIfProductIsClicked(id, productSelected.id)}
                onAdd={(event) => handleAddButton(event, id)}
                overImageSource={IMAGE_NO_STOCK}
                isOverlapImageVisible={convertStringToBoolean(isAvailable) === false}
              />
            </div>
          </CSSTransition>
        )
      })}
       {showModal &&  <CustomModal onClose={closeModal} />}
    </TransitionGroup>
  )
}




const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); */
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  overflow-y: scroll;

  ${menuAnimation}

  .card-container {
    position: relative;
    height: 330px; // pour éviter une zone de click verticale bizarre qu'on voit qu'au pointeur de l'outil inspect du navigateur
    border-radius: ${theme.borderRadius.extraRound};
    z-index:0;

    &.is-hoverable {
      &:hover {
        //  border: 1px solid red; 
        transform: scale(1.05);
        transition: ease-out 0.4s;
      }
    }
  }

  .ribbon {
    z-index: 2;
  }
  ${ribbonAnimation}
`