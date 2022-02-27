import React from "react";
import { Route, Routes } from "react-router-dom";
import PhoneDetailComponent from "./components/PhoneDetailComponent/PhoneDetailComponent";
import PhoneListContainer from "./components/PhoneListContainer/PhoneListContainer";

const routes = (
  <div>
    <Routes>
      <Route path="/" element={<PhoneListContainer />} />
      <Route path="/detail/:id" element={<PhoneDetailComponent />} />
    </Routes>
  </div>
);

export default routes;
