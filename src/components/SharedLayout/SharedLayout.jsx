import { Outlet } from "react-router-dom";
import { Container } from "./SharedLayout.styled";

import { Suspense } from "react";
import { Header } from "../Header/Header";

export const SharedLayout = () => {
  return (
    <Container>
      <Header />
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
