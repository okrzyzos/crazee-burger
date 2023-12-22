import { FaHamburger } from "react-icons/fa"
import { BsFillCameraFill } from "react-icons/bs"
import { MdOutlineEuro } from "react-icons/md"
import { GoPackage } from "react-icons/go";
import { GiMegaphone } from "react-icons/gi";
import { isAvailableOptions, isPublicisedOptions } from "../../../../../../../enums/select"

export const getInputTextsConfig = (newProduct) => [
  {
    id: "0",
    name: "title",
    value: newProduct.title,
    type: "text",
    className:"title",
    placeholder: "Nom du produit (ex: Super Burger)",
    Icon: <FaHamburger />,
    version: "minimalist",
  },
  {
    id: "1",
    name: "imageSource",
    value: newProduct.imageSource,
    type: "text",
    className:"image-source",
    placeholder: "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)",
    Icon: <BsFillCameraFill />,
    version: "minimalist",
  },
  {
    id: "2",
    name: "price",
    value: newProduct.price ? newProduct.price : "",
    type: "text",
    placeholder: "Prix",
    className:"price",
    Icon: <MdOutlineEuro />,
    version: "minimalist",
  },
]

export const getSelectInputConfig = (newProduct) => [

{
  id: "3",
  name: "isAvailable",
  value: newProduct.isAvailable,
  options:isAvailableOptions,
  Icon: <GoPackage />,
  className:"is-available",

},
{
  id: "4",
  name: "isPublicised",
  value: newProduct.isPublicised,
  options:isPublicisedOptions,
  Icon: <GiMegaphone />,
  className:"is-publicised",

}

]




