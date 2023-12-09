import { useContext } from "react";
import OrderContext from "../../../../../../../context/OrderContext";
import Form from "./Form";
import EditInfoMessage from "./EditInfoMessage";
import PrimaryButton from "../../../../../reusable-ui/PrimaryButton";

export default function EditForm() {
  // state
  const { productSelected, setProductSelected, handleEdit, titleEditRef } =
    useContext(OrderContext);

  // comportements (gestionnaires d'événement ou "event handlers")
  const handleChange = (event) => {
    const { name, value } = event.target;

    const productBeingUpdated = {
      ...productSelected,
      [name]: value,
    };

    setProductSelected(productBeingUpdated); // cette ligne update le formulaire
    handleEdit(productBeingUpdated); // cette ligne update le menu
  };

  // affichage
  return (
    <>
      <Form
        product={productSelected}
        onChange={handleChange}
        ref={titleEditRef}
        handleEdit={handleEdit}
      >
        <EditInfoMessage />
      </Form>
     
    </>
  );
}
