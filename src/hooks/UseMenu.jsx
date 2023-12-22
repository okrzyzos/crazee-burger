import React, { useState } from "react";
import { deepClone } from "../utils/array";
import { fakeMenu } from "../fakeData/FakeMenu";
import { toast } from "react-toastify";
import { syncBothmenu } from "../api/Product";

const UseMenu = () => {
  const [menuData, setMenuData] = useState();

  // const addProductToMenu = (newProduct) => {
  //   setMenuData([...menuData, newProduct]);
  // };

  const handleAdd = (newProduct,username) => {

      const menuCopy = deepClone(menuData)

      const menuUpdated = [newProduct,...menuCopy]
      setMenuData(menuUpdated)
    toast.success("Ajouter avec success")

    syncBothmenu(username,menuUpdated)


  };

  const handleEdit = (productBeingEdited,username) => {
    const indexOfProductToEdit = menuData.findIndex(
      (product) => product.id === productBeingEdited.id
    );

    if (indexOfProductToEdit !== -1) {
      const updatedMenu = deepClone(menuData);
      updatedMenu[indexOfProductToEdit] = productBeingEdited;
      setMenuData(updatedMenu);
    syncBothmenu(username,updatedMenu)

    }
  };

  const resetMenu = (username) => {
    setMenuData(fakeMenu.LARGE);
    syncBothmenu(username,fakeMenu.LARGE)

    toast.success("Produits regénéré avec success");
  };

  const handleDelete = (idOfProductToDelete,username) => {
    //1. copy du state
    const menuCopy = deepClone(menuData);

    //2. manip de la copie state
    const menuUpdated = menuCopy.filter(
      (product) => product.id !== idOfProductToDelete
    );

    //3. update du state
    setMenuData(menuUpdated);
    syncBothmenu(username,menuUpdated)

    toast.success("Supprimé avec success");
  };

  return {
    handleEdit,
    handleDelete,
    resetMenu,
    handleAdd,
    menuData,
    setMenuData,
  };
};

export default UseMenu;










