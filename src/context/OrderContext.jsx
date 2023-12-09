import { createContext } from "react";

export default createContext({
  isAdminMode: false,
  setAdminMode: () => {},
  isCollapsed: false,
  setIsCollapsed: () => {},
  currentTabSelected: false,
  setCurrentTabSelected: () => {},
  addProductToMenu: () => {},
  updateProductInMenu: () => {},
  menuData: [],
  setMenuData: () => {},
  handleAdd: () => {},
  handleDelete: () => {},
  handleEdit: () => {},
  resetMenu: () => {},

  newProduct: {},
  setNewProduct: () => {},

  productSelected: {},
  setProductSelected: () => {},

  titleEditRef: {},
});
