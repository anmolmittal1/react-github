import { Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";

import Navbar from "@layout/Navbar";

const Root = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default Root;
