import React, { useState } from "react";
import { fakeBasket } from "../fakeData/FakeBasket";
import { deepClone, findObjectById} from "../utils/array";
import { toast } from "react-toastify";
import { setLocalStorage } from "../utils/window";

const UseBasket = () => {
  const [basket, setBasket] = useState([]);

  const handleAddToBasket = (productAdd,username) => {
    const basketCopy = deepClone(basket);

    const existingProduct = findObjectById(productAdd.id, basketCopy);

    if (existingProduct) {
      // Product already exists in the basket, update quantity
      existingProduct.quantity += 1;
      setBasket(basketCopy);
      setLocalStorage(username, basketCopy);
      toast.success("Ajout menu in basket success! ");
      return;
    }

    // Product not in the basket, add it with quantity 1
    const newProductBasket = {
      ...productAdd,
      quantity: 1,
    };
    basketCopy.push(newProductBasket);
    setBasket(basketCopy);
    setLocalStorage(username, basketCopy);

    toast.success("Ajout menu in basket success! ");
  };

 

  const handleDeleteBasket = (idBasket,username) => {
    const basketCopy = deepClone(basket);

    //2. manip de la copie state
    const basketUpdated = basketCopy.filter(
      (product) => product.id !== idBasket
    );

    //3. update du state
    setBasket(basketUpdated);
    setLocalStorage(username, basketUpdated);

    toast.success("Supprimé avec success");
  };

  return { basket, handleAddToBasket, handleDeleteBasket,setBasket };
};

export default UseBasket;
