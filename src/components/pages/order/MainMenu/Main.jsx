import React, { useState, useEffect } from "react";
import styled from "styled-components";
import theme from "../../../../theme/index";
import MenuProduct from "../../../MenuProduct";
import { fakeMenu1, fakeMenu2 } from "../../../../api/Data";

function Main() {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    // Simulate fetching data with a timeout
    const fetchData = () => {
      // Simulating an API call with a delay
      setTimeout(() => {
        // Combine your fake menu data
        const combinedMenu = [...fakeMenu1, ...fakeMenu2];
        setMenuData(combinedMenu);
      }, 500); // Delay in milliseconds
    };

    fetchData();
  }, []);

  return (
    <MainStyled className="main">
      <div className="basket"></div>
      <div className="menu"></div>
      <MenuProduct menu={menuData} />
    </MainStyled>
  );
}
const MainStyled = styled.div`
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  overflow-y: auto;
  flex: 1;
  display: grid;
  grid-template-columns:1fr;

`;

export default Main;
