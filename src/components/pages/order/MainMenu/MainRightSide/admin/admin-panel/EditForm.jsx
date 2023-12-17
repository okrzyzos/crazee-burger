import { useContext, useState } from "react";
import OrderContext from "../../../../../../../context/OrderContext";
import Form from "./Form";
import EditInfoMessage from "./EditInfoMessage";
import PrimaryButton from "../../../../../reusable-ui/PrimaryButton";
import SavingMessage from "./SavingMessage";

export default function EditForm() {
  const [valueOnFocus, setValueOnFocus] = useState();
  const [isFieldModified, setIsFieldModified] = useState(false);
  const [showSavingMessage, setShowSavingMessage] = useState(false);
  // state
  const {
    productSelected,
    setProductSelected,
    handleEdit,
    titleEditRef,
    username,
  } = useContext(OrderContext);

  // comportements (gestionnaires d'événement ou "event handlers")
  const handleChange = (event) => {
    const { name, value } = event.target;

    const productBeingUpdated = {
      ...productSelected,
      [name]: value,
    };

    const savingMessageTimout = () => {
      setTimeout(() => {
        setShowSavingMessage(false);
      }, 4000);
    }

    setProductSelected(productBeingUpdated); // cette ligne update le formulaire
    handleEdit(productBeingUpdated, username); // cette ligne update le menu
    setIsFieldModified(true);
    savingMessageTimout()
    
  };

  const handleOnFocus = (event) => {
    const valueOnFocus = event.target.value;
    setValueOnFocus(valueOnFocus);
    setIsFieldModified(false);
  };
  const handleOnBlur = (event) => {
    const valueOnBlur = event.target.value;
    if (valueOnFocus !== valueOnBlur) {
      setIsFieldModified(true);

      setShowSavingMessage(true);
    }
  };
  // affichage
  return (
    <>
      <Form
        product={productSelected}
        onChange={handleChange}
        ref={titleEditRef}
        handleEdit={handleEdit}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
      >
        {isFieldModified && showSavingMessage ? (
          <SavingMessage />
        ) : (
          <EditInfoMessage />
        )}
      </Form>
    </>
  );
}
