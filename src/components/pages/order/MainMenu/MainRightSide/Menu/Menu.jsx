import { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../../context/OrderContext.jsx";
import { theme } from "../../../../../../theme/index";
import { formatPrice } from "../../../../../../utils/maths.jsx";
import Card from "../../../../reusable-ui/Card.jsx";
import { checkIfProductIsClicked } from "./helper.jsx";
import EMPTY_PRODUCT from "../../../../../../enums/product.js";
import MenuEmpty from "./MenuEmpty.jsx";
import MenuEmptieAdmin from "./MenuEmptieAdmin.jsx";

const IMAGE_BY_DEFAULT = "/images/coming-soon.png";

export default function MenuProduct() {
  const {
    menuData,
    isAdminMode,
    handleDelete,
    resetMenu,
    productSelected,
    setProductSelected,
    setIsCollapsed,
    setCurrentTabSelected,
    titleEditRef,
  } = useContext(OrderContext);
  // state

  // comportements (gestionnaires d'événement ou "event handlers")
  const handleClick = async (idProductClicked) => {
    if (!isAdminMode) return;

    await setIsCollapsed(false);
    await setCurrentTabSelected("edit");
    const productClickedOn = menuData.find(
      (product) => product.id === idProductClicked
    );
    await setProductSelected(productClickedOn);
    titleEditRef.current.focus();
  };

  // affichage
  if (menuData.length === 0) {
    if (!isAdminMode) return <MenuEmpty />;
    return <MenuEmptieAdmin onReset={resetMenu} />;
  }

  const handleCardDelete = (event, idProductToDelete) => {
    event.stopPropagation();
    handleDelete(idProductToDelete);
    idProductToDelete === productSelected.id &&
      setProductSelected(EMPTY_PRODUCT);
    titleEditRef.current.focus();
  };

  return (
    <MenuStyled className="menu">
      {menuData.map(({ id, title, imageSource, price }) => {
        return (
          <Card
            key={id}
            title={title}
            imageSource={imageSource ? imageSource : IMAGE_BY_DEFAULT}
            leftDescription={formatPrice(price)}
            hasDeleteButton={isAdminMode}
            onDelete={(event) => handleCardDelete(event, id)}
            onClick={() => handleClick(id)}
            isHoverable={isAdminMode}
            isSelected={checkIfProductIsClicked(id, productSelected.id)}
          />
        );
      })}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  // grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 60px;
  justify-items: center;
  padding: 30px;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  overflow-y: scroll;
`;
