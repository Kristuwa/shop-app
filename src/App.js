import { theme } from "./utils/theme";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";

const ShoppingCart = lazy(() => import("./pages/ShoppingCart/ShoppingCart"));
const Shop = lazy(() => import("./pages/Shop/Shop"));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Shop />} />
          <Route path="/shoppingCart" element={<ShoppingCart />} />
          <Route path="*" element={<Shop />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
