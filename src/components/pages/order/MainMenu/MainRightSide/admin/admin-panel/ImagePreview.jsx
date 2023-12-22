import React from "react"
import styled from "styled-components"
import  theme from "../../../../../../../theme/index";
import { fadeIn } from "../../../../../../../theme/animations";

export default function ImagePreview({ imageSource, title ,className, marginTop }) {
  return (
    <ImagePreviewStyled className={className} marginTop={marginTop}  >
      {imageSource ? (
        <img src={imageSource} alt={title} 
        />
      ) : (
        <div  className="empty-image">Aucune Image</div>
      )}
    </ImagePreviewStyled>
  )
}

const ImagePreviewStyled = styled.div`
  grid-area: 1 / 1 / 4 / 2;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100px;
    height: 100px;
    object-fit: contain;
    object-position: center;
    animation: ${fadeIn} 1s;

  }

  .empty-image {
    /* background-color: green; */
    height: 200px;
    width: 100%;
    margin-top: ${(props) => props.marginTop || "35px"}; /* Use the passed prop or default to 35px */
    display: flex;
    margin-left:20px;
    justify-content: center;
    align-items: center;
    border: 1px solid ${theme.colors.greyLight};
    line-height: 1.5;
    color: ${theme.colors.greySemiDark};
    border-radius: ${theme.borderRadius.round};
  }
`