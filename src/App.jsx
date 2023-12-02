import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/pages/login/LoginPage";
import OrderPage from "./components/pages/order/OrderPage";
import PageErreur from "./components/pages/error/PageErreur";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<LoginPage />} />
        <Route path="/order-page/:firstName" element={<OrderPage />} />
        <Route path="*" element={<PageErreur />} />{" "}
      </Routes>
    </>
  );
}

export default App;
