import React from "react";
import Header from "./components/Header/Header";
import { Container } from "react-bootstrap";
import routes from "./routes";

function App() {
  return (
    <Container>
      <Header />
      {routes}
    </Container>
  );
}

export default App;
