import React from "react";
import { Navbar } from "react-bootstrap";
import "./Header.css";

export default function Header() {
  return (
    <Navbar bg="light" className="header">
      <h3>ZignaApp</h3>
    </Navbar>
  );
}
