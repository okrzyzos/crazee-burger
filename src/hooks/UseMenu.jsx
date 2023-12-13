import React, { useState } from "react";
import { deepClone } from "../utils/array";
import { fakeMenu } from "../fakeData/FakeMenu";
import { toast } from "react-toastify";

const UseMenu = () => {
  const [menuData, setMenuData] = useState(fakeMenu.LARGE);

  // const addProductToMenu = (newProduct) => {
  //   setMenuData([...menuData, newProduct]);
  // };

  const addProductToMenu = (newProduct) => {
    setMenuData((prevMenuData) => {
      const addMenuData = [...prevMenuData];
      addMenuData.unshift(newProduct);
      return addMenuData;
    });
  };

  const handleEdit = (productBeingEdited) => {
    const indexOfProductToEdit = menuData.findIndex(
      (product) => product.id === productBeingEdited.id
    );

    if (indexOfProductToEdit !== -1) {
      const updatedMenu = deepClone(menuData);
      updatedMenu[indexOfProductToEdit] = productBeingEdited;
      setMenuData(updatedMenu);
    }
  };

  const resetMenu = () => {
    setMenuData(fakeMenu.LARGE);
    toast.success("Produits regénéré avec success");
  };

  const handleDelete = (idOfProductToDelete) => {
    //1. copy du state
    const menuCopy = deepClone(menuData);

    //2. manip de la copie state
    const menuUpdated = menuCopy.filter(
      (product) => product.id !== idOfProductToDelete
    );
    console.log("menuUpdated: ", menuUpdated);

    //3. update du state
    setMenuData(menuUpdated);
    toast.success("Supprimé avec success");
  };

  return {
    handleEdit,
    handleDelete,
    resetMenu,
    addProductToMenu,
    menuData,
    setMenuData,
  };
};

export default UseMenu;
