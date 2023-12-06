import { createContext } from "react";

export default createContext({
  isAdminMode: false,
  setAdminMode: () => {},
  isCollapsed: false,
  setIsCollapsed: () => {},
  currentTabSelected: false,
  setCurrentTabSelected: () => {},
  addProductToMenu: () => {},
  menuData: [],
  setMenuData: () => {},
});
