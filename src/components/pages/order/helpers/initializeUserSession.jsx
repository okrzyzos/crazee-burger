import React, { useEffect } from "react";
import { getMenu } from "../../../../api/Product";
import { getLocalStorage } from "../../../../utils/window";
 

  const initialMenu = async (username,setMenuData) => {
    const menuReceived = await getMenu(username);
    setMenuData(menuReceived);
  };
  const initialBasket = (username,setBasket) => {
    const basketReceived = getLocalStorage(username);
    if (basketReceived) {
      setBasket(basketReceived);
    }
  };


  export const initializeUserSession = async (username,setMenuData,setBasket) => {
    await initialMenu(username,setMenuData);
    initialBasket(username,setBasket);
  };
 
